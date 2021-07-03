import React from 'react';
import ES6 from '../../images/ES6.png';
import jsArray from '../../images/jsarray.jpeg';
import react from '../../images/reactjs.png';
import trick from '../../images/trickCont.jpeg';
import NavigationBar from '../Share/NavigationBar/NavigationBar';
import './Blog.css';

const blogs =[

    {
        id:1,
        blogName:'Basic and Interesting method of Array in JavaScript.',
        blogLink:'https://aminmdtahsin243.medium.com/basic-and-interesting-method-of-array-in-javascript-99453d5aec33',
        images:jsArray,
        topics:[
        'Concept of Array',
        'Declaration of an Array',
        'Initialization of an Array',
        'Interesting methods of an Array',
        ]
    },
    {
        id:2,
        blogName:'Most interesting methods, operators, and concepts in ES6',
        blogLink:'https://aminmdtahsin243.medium.com/most-interesting-methods-operators-and-concepts-in-es6-9bdcdc374a52',
        images:ES6,
        topics:[
            'Block Binding','Hoisting','ES6','Template Literals','Spread operator'
            ,'Destructuring'
        ]
    },
    {
        id: 3,
        blogName:'Tricky concept and some problem solving using JavaScript.',
        blogLink:'https://aminmdtahsin243.medium.com/tricky-concept-and-some-problem-solving-using-javascript-5add32a98cc3',
        images:trick,
        topics:[
            'Truthy and Falsy values',`null`,'undefined','Double equal','Triple equal',
            'Problem Solving','Sieve of Eratosthenes'
        ]
    },
    {
        id:4,
        blogName:'React core concept.',
        blogLink:'https://aminmdtahsin243.medium.com/react-core-concept-2c150534427c',
        images:react,
        topics:['React library or Framework','Virtual-DOM','Component Lifecycle']
    },
]


const Blog = () => {
    return (
        <div className='blog-container'>
            <NavigationBar></NavigationBar>
            <h4 className='text-white text-center pt-5 mt-5'>C<span>om</span>ing So<span>on</span> .<span>..</span>. </h4>
            <h1 className='text-white text-center pt-5 mt-5'>Coming Soon..</h1>
        </div>
    );
};

export default Blog;
