const TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';

//LINEから送信されたデータを処理する
function doPost(e) {
  //レスポンスを取得 */
  const responseLine = e.postData.getDataAsString();
  //JSON形式に変換する
  const responseLineJson = JSON.parse(responseLine).events[0];
  //イベントへの応答に使用するトークンを取得
  const replyToken = responseLineJson.replyToken;
  
  //メッセージイベントの場合
  if (responseLineJson.type == 'message') {
    messageController(responseLineJson, replyToken);
  } 
}