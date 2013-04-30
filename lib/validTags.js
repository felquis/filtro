module.exports = function (tagName) {
	var tagsAvaiables = [
		'facebook',
		'title'
	]

	var index = tagsAvaiables.indexOf(tagName);

	return (index > -1)? true : false;
}