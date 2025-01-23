import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactForm: FormGroup;

  private serviceID = 'service_3ybv2e2';
  private templateID = 'template_4dzsshq';
  private userID = 'Oz_8DbIpQ8325Hb0Q';
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      inquiry: ['', Validators.required],
      company: ['', Validators.maxLength(50)],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  // onSubmit(): void {
  //   if (this.contactForm.valid) {
  //     console.log(this.contactForm.value);
  //     // Handle form submission logic here
  //   } else {
  //     this.contactForm.markAllAsTouched();
  //   }
  // }

  // onSubmit() {
  //   emailjs
  //     .sendForm(this.serviceID, this.templateID, this.contactForm.value, this.userID)
  //     .then(
  //       (result) => {
  //         console.log('Email sent successfully:', result.text);
  //       },
  //       (error) => {
  //         console.error('Error sending email:', error.text);
  //       }
  //     );
  // }

  onSubmit(): void {
    // event.preventDefault(); // Prevent the default form submission
    // const form = event.target as HTMLFormElement; // Capture the form element

    emailjs
      .sendForm(this.serviceID, this.templateID, this.contactForm.value, this.userID)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Error sending email. Please try again later.');
        }
      );

    // Optionally reset the form after submission
    this.contactForm.reset();
  }
}
