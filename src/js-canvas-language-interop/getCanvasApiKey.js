function getCanvasApiKey() {
    var props = PropertiesService.getScriptProperties();
    return props.getProperty('canvas_api_key')
}