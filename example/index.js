var app = new Vue({
  el: '#demo',
  data: function(){
  	return {
  		content: '<h1>Hello World</h1><p>This is an example</p>',
  		content2: '<p>Other area</p>',
  		content3: '<p>hidden</p>'
  	};  	
  },
  components: {
    vueCkeditor: vueCkeditor.default
  }
});
