function changeFormAction() {
  var form = this;
  form.action = "" + item +  "&auth=AUTHENTICATIONtoken";
  form.submit();
}