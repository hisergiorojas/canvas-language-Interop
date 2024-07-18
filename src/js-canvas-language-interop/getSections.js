function getSections(courseId) {
    var token = getCanvasApiKey();
    var options = {
      muteHttpExceptions: true,
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": "GSheet Canvas API",
      },
    };
  
    const canvas_base_url = `https://canvas.instructure.com/api/v1`;
  
    var response = UrlFetchApp.fetch(
      `${canvas_base_url}/courses/${courseId}/sections?`,
      options
    );
    var json = JSON.parse(response.getContentText());
  
    return json;
}