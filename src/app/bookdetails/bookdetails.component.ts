import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { List } from '../shared/list';
import { LISTS } from '../shared/lists';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListService } from '../services/list.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { visibility, flyInOut, expand } from '../animations/app.animation';
import { Comment } from '../shared/comment';



@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ]
})

export class BookdetailsComponent implements OnInit {

  book: List;
  errMess: string;
  listIds: string[];
  prev: string;
  next: string;
  bookcopy: List;
  visibility = 'shown';

  constructor(private listservice: ListService, private location: Location, private route: ActivatedRoute,
    private fb:FormBuilder, @Inject('BaseURL') private BaseURL) {
    this.createForm();
  }

  ngOnInit() {
     this.listservice.getListIds()
     .subscribe((listIds) => this.listIds = listIds);
     this.route.params
      .pipe(switchMap((params: Params) => {this.visibility = 'hidden'; return this.listservice.getList(params['id']);}))
      .subscribe(book => {this.book = book; this.bookcopy = book; this.setPrevNext(book.id); this.visibility='shown';},
       errMess => this.errMess = <any>errMess);
  }

  setPrevNext(listId: string) {
    const index = this.listIds.indexOf(listId);
    this.prev = this.listIds[(this.listIds.length + index - 1) % this.listIds.length];
    this.next = this.listIds[(this.listIds.length + index + 1) % this.listIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  // Form for accepting the comments, ratings from the user

  feedbackForm: FormGroup;
  comment: Comment;
  listID: number;
  dataList: List[];


  @ViewChild('fform') feedbackFormDirective;

  formErrors = {
    'author': '',
    'rating' : '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required': 'Name is required.',
      'minlength' : 'Name must be at least 2 characters long.',
      'maxlength' : 'Name can not be more than 25 characters long.'
    },

    'rating': {
      'required': 'Rating is required.',
    },

    'comment': {
      'required': 'Comment is required.',
    }
  };

  createForm() {
    this.feedbackForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: 5,
      comment: '',

    });

    //valueChanges Observable is provided by Angular framework whenevar 'form' changes
    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set form validation messages
  }


  onValueChanged(data?: any) {

    if(!this.feedbackForm) {return;}

    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if(this.formErrors.hasOwnProperty(field)) {
        //clear previous error messages (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + '';
            }
          }
        }
      }
    }
  }


  onSubmit() {
    this.comment = this.feedbackForm.value;
    this.addComment();
    this.feedbackForm.reset({
      author: '',
      rating: 5,
      comment: '',
    });
    this.feedbackFormDirective.resetForm();
  }

  addComment() {
      var d = new Date();
      var date = d.toISOString();
      var index = this.book.comments.length;
      this.book.comments.push(this.comment);
      this.book.comments[index].date = date;
      this.listservice.putList(this.bookcopy).subscribe(book => {
        this.book = book;
        this.bookcopy = book;
      }, errMess => {this.book = null; this.bookcopy = null; this.errMess = <any>errMess});

  }

}
