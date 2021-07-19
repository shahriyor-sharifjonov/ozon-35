CKEDITOR.replace('editor1', {
  height: 300,
  baseFloatZIndex: 10005,
  toolbarGroups: [
  {
    "name": "document",
    "groups": ["mode"]
  },
  {
    "name": "links",
    "groups": ["links"]
  },
  {
    "name": "basicstyles",
    "groups": ["basicstyles"]
  },
  {
    "name": "paragraph",
    "groups": ["list", "blocks"]
  },
  {
    "name": "insert",
    "groups": ["insert"]
  },
  {
    "name": "styles",
    "groups": ["styles"]
  },
  {
    "name": "about",
    "groups": ["about"]
  }
],
// Remove the redundant buttons from toolbar groups defined above.
removeButtons: 'Specialchar'
});