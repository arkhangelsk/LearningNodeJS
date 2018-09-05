var courses = {
    course1: 'Javascript',
    course2: 'NodeJS',
    course3: 'Python',
    greet: function(){
        console.log('Welcome to Software Testing Trends...');
        console.log('Course available to learn: '  );
        console.log('1: ' + courses.course1);
        console.log('2: ' + courses.course2);
        console.log('3: ' + courses.course3);
    } 
};

courses.greet();



//console.log(courses['course2']);
