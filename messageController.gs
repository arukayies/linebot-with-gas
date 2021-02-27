//メッセージイベントの処理
function messageController(event, replyToken) {
	//メッセージを取得
	const message = event.message;
	//本文を取得
	const text = message.text;

	//本文に'サンプル'と送られてきた場合
	if (text.indexOf('サンプル') > -1) {
		//LINEのメッセージ形式にする
		let LineMessageObject = [{
			'type': 'text',
			'text': 'サンプルサンプルサンプル'
		}];

		//LINEに返信する
		replyLine(LineMessageObject, replyToken);
	}
}