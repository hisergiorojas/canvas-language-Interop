function nextURL(linkTxt) {
    var url = null;
  
    if (linkTxt) {
      var links = linkTxt.split(",");
      var nextRegEx = new RegExp('^<(.*)>; rel="next"$');
  
      for (var i = 0; i < links.length; i++) {
        var matches = nextRegEx.exec(links[i]);
  
        if (matches) {
          url = matches[1];
        }
      }
    }
  
    return url;
  }