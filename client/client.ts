import * as sub from './sub';
import jquery = require('jquery');

async function documentReady($: JQueryStatic): Promise<void> {
    console.log("client");
	const postUrl = sub.getUrl();
	const postData = {
		a: 1,
		b: 2
	};
	const postResult = await $.post(postUrl, $.param(postData));

	$("#postResult")[0].innerHTML = postResult;
}

$(document).ready(documentReady);
