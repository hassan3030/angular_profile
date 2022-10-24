import { Injectable ,OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Projects } from './../interfaces/projects';
import { Sites } from './../interfaces/sites';



// import { x } from './mainArrays';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService implements OnInit {

  constructor(private _Title:Title , private _Router:Router) { }
  _Projects:Projects[]=[
    {
      title:'Gf Center',
      caption:'Cenetr of corses',
      img:'assets/works/Capture.PNG',
      linkView:'https://hassan3030.github.io/gf_center/',
      linkHup:'https://github.com/hassan3030/gf_center'
    },
    {
      title:'login',
      caption:'Simple page login',
      img:'assets/works/Capture2.PNG',
      linkView:'https://hassan3030.github.io/w3-temp-login/',
      linkHup:''
    },
    {
      title:'BentDesin',
      caption:'Simple page with animation',
      img:'assets/works/c3.PNG',
      linkView:'https://hassan3030.github.io/bentDesin/',
      linkHup:'https://github.com/hassan3030/bentDesin'
    },{
      title:'Doctor',
      caption:'Simple page of mediccine',
      img:'assets/works/Capture4.PNG',
      linkView:'https://hassan3030.github.io/doctor/',
      linkHup:'https://github.com/hassan3030/doctor'
    },
    {
      title:'Profile',
      caption:'This is profile',
      img:'assets/works/Capture5.PNG',
      linkView:'https://hassan3030.github.io/profile/',
      linkHup:'https://github.com/hassan3030/profile'
    },
    {
      title:'Epilogue',
      caption:'Simple page',
      img:'assets/works/Capture6.PNG',
      linkView:'https://hassan3030.github.io/epilogue/',
      linkHup:'https://github.com/hassan3030/epilogue'
    },
    {
      title:'E_Commerce',
      caption:'E_Commerce to pay close',
      img:'assets/works/c7.PNG',
      linkView:'https://hassan3030.github.io/E_com/',
      linkHup:'https://github.com/hassan3030/E_com'
    },
    {
      title:'Agency',
      caption:'Simple web site',
      img:'assets/works/Capture8.PNG',
      linkView:'https://hassan3030.github.io/agency/',
      linkHup:'https://github.com/hassan3030/agency'
    },

  ]
  
  editors:Sites[]=[
    {
      url:' https://www.sassmeister.com/'
      ,title:'SASS'
      ,describe:'',
      icon:'fab fa-sass'
    },
    {
      url:'https://codepen.io/'
      ,title:'Codepen'
      ,describe:'',
      icon:'fab fa-codepen'
    }, {
      url:'https://jsoneditoronline.org/#left=local.bayane&right=local.tuhura'
      ,title:'JSON Editor Online'
      ,describe:'',
      icon:''
    }, {
      url:'https://validator.w3.org/checklink'
      ,title:'Validator.w3'
      ,describe:'Validator to check code',
      icon:''
    },
  ];
   youtube:Sites[]=[
    {
      url:'https://www.youtube.com/c/theroadmap/playlists'
      ,title:' Roadmap'
      ,describe:'Design Pattern',
      icon:'fab fa-youtube'
    },
    {
      url:'https://www.youtube.com/channel/UCMHvK9tare9Y9O152C9wm3Q/playlists'
      ,title:'D-I-Ry'
      ,describe:'Explain angular and JS',
      icon:'fab fa-youtube'
    },{
      url:'https://www.youtube.com/angular'
      ,title:'Angular'
      ,describe:'angular',
      icon:'fab fa-youtube'
    }
  ];
   API:Sites[]=[
    {
      url:'https://jsonplaceholder.typicode.com/'
      ,title:' JSON Placeholder'
      ,describe:'',
      icon:'fas fa-brackets-curly'
    },
  ];
  
 learningOne:Sites[]=[
  {
    url:'ttps://ng-bootstrap.github.io/#/home'
    ,title:'ng-bootstrap'
    ,describe:'ng-bootstrap Angular widgets built from the ground up using only Bootstrap 5 CSS with APIs designed for the Angular ecosystem.',
    icon:'fab fa-bootstrap'
  }, {
    url:' https://css-tricks.com/'
    ,title:'CSS-tricks'
    ,describe:' Web Component Pseudo-Classes and Pseudo-Elements are Easier Than You Think',
    icon:'fab fa-css3'
  }, {
    url:'https://www.freecodecamp.org/learn'
    ,title:'Freecodecamp'
    ,describe:'tutorial for code',
    icon:'fab fa-free-code-camp'
  }, {
    url:'https://namechk.com/'
    ,title:'Namechk'
    ,describe:'reserved domain',
    icon:''
  }, {
    url:'https://rxjs.dev/'
    ,title:'RxJS'
    ,describe:'RxJS is Reactive Extensions Library for JavaScript',
    icon:'fab fa-angular'
  }, {
    url:'https://material.angular.io/'
    ,title:'Angular material'
    ,describe:'Material Design components for Angular',
    icon:'fab fa-angular'
  }, {
    url:'https://mdbootstrap.com/docs/angular/getting-started/installation/'
    ,title:'MDBootstrap'
    ,describe:'bootstrap with angular',
    icon:'fab fa-mdb'
  }, {
    url:'https://gtmetrix.com/'
    ,title:'Gtmetrix'
    ,describe:'How fast does your website load?Find out with GTmetrix',
    icon:'' 
  }, {
    url:'https://fontawesome.com/'
    ,title:'Font Awesome'
    ,describe:'',
    icon:'fab fa-font-awesome'
  }
];
learningTwo:Sites[]=[
  {
    url:'https://nodejs.org/en/'
    ,title:'  Nodejs'
    ,describe:'Node.js® is a JavaScript runtime built on Chromes V8 JavaScript engine.',
    icon:'fab fa-node-js'
  },
  {
    url:'https://projectnotes.org/html/'
    ,title:'Project Notes'
    ,describe:'ready projects',
    icon:''
  },{
    url:'https://www.mongodb.com'
    ,title:'  MongoDB'
    ,describe:'',
    icon:''
  },{
    url:'https://github.com/'
    ,title:'Github'
    ,describe:'',
    icon:'fab fa-github'
  },{
    url:'https://xhr.spec.whatwg.org/'
    ,title:'XMLHttpRequest'
    ,describe:'',
    icon:''
  },{
    url:'https://www.npmjs.com/'
    ,title:'NPM'
    ,describe:'',
    icon:'fab fa-npm'
  },{
    url:'https://unsplash.com/'
    ,title:'Unsplash'
    ,describe:'download pictures',
    icon:'fab fa-unsplash'
  },{
    url:'https://bootstrapdocs.com/v3.2.0/docs/'
    ,title:'Bootstrap'
    ,describe:'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
    icon:'fab fa-bootstrap'
  },{
    url:'https://ar.quora.com/'
    ,title:'Quora.com'
    ,describe:'as Facebook to programming',
    icon:'fab fa-quora'
  },
];
learningThree:Sites[]=[
  {
    url:'https://ngrx.io/'
    ,title:'NGRX'
    ,describe:'Reactive State for Angular',
    icon:'fab fa-angular'
  },
  {
    url:'https://stackblitz.com/'
    ,title:'Stackblitz'
    ,describe:'he fastest, most secure dev environment on the planet.',
    icon:'fas fa-bolt'
  }, {
    url:'https://tinypng.com/'
    ,title:' Tinypng'
    ,describe:'Smart WebP, PNG and JPEG compression  More than 1 billion WebP, PNG and JPEG images optimized and still counting!',
    icon:'fas fa-image'
  }, {
    url:'https://dimsemenov.com/plugins/magnific-popup/'
    ,title:'Magnific-popup'
    ,describe:'Magnific Popup is a responsive lightbox & dialog script with focus on performance and roviding best experience for user with any device (for jQuery or Zepto.js).',
    icon:''
  }, {
    url:'https://material.io/'
    ,title:'MATERIAL DESIGN'
    ,describe:'Meet Material Design 3, Google’s most expressive and adaptable design system yet',
    icon:''
  }, {
    url:'https://getuikit.com/'
    ,title:'Uikit'
    ,describe:'A lightweight and modular front-end framework for developing fast and powerful web interfaces.',
    icon:'fab fa-uikit'
  }, {
    url:'https://animate.style/'
    ,title:'Animate Style'
    ,describe:'',
    icon:''
  }, {
    url:'https://fonts.google.com/?preview.size=42'
    ,title:' Google Fonts'
    ,describe:'',
    icon:''
  }, {
    url:'https://elzero.org/'
    ,title:'Elzero web School'
    ,describe:'',
    icon:''
  },
];


ngOnInit(){}

}
