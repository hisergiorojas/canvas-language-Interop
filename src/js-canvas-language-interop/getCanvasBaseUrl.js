function getCanvasBaseUrl() {
    var props = PropertiesService.getScriptProperties();
    return props.getProperty('canvas_base_url')
}