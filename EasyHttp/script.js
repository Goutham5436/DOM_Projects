const http = new easyHTTP;

//Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });

//create data
const data = {
    title: 'Custom Post',
    body: 'This is a custom body'
};
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
});
