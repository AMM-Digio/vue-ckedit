# vue-ckeditor

Vue Component inserts a CKEditor with data binding

## Features

* Easy use
* Data binding

## Start guide

Insert the tag 
```html
<vue-ckeditor content="variable"></vue-ckeditor>
```

And in the vue app initialization
```js
var app = new Vue({
  el: '#demo',
  data: function(){
    return {
      content: '<h1>Hello World</h1><p>This is an example</p>'
    };    
  },
  components: {
    vueCkeditor: vueCkeditor.default
  }
});

```

Add CKEditor JavaScript in the HTML template. *Remember check the correct script path.*

```html
<script>
  CKEDITOR_BASEPATH = '../dist/assets/ckeditor/';
</script>
<script type="text/javascript" src="../dist/assets/ckeditor/ckeditor.js"></script>
```

## Props

| Name           | Type     | Description                              |
| -------------- | -------- | ---------------------------------------- |
| `id`           | `String` | Id of instance ckedior. **Required. Default: editor** |
| `height`       | `String` | Height of ckeditor. **Default: 200px**   |
| `toolbar`      | `Array`  | Toolbar configuration of ckeditor. **Default: [['Format'], ['Bold', 'Italic'], ['Undo', 'Redo']]** |
| `language`     | `String` | Language of ckeditor. **Default: en**    |
| `extraplugins` | `String` | List of additional plugins to be loaded. |

For Toolbar configuration please read the file in your browser ```node_modules/ckeditor/samples/toolbarconfigurator/index.html#advanced```

## Usage in Creamture.js

1. Download CKEditor using Bower and Unify with Gulp in the gulpfile.js
2. Change CKEDITOR_BASEPATH to the Bower installation.
3. Add to Unification process in Gulp the library vue-ckeditor.js after the ckeditor declaration