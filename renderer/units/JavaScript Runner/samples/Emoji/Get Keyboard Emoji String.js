// Get Keyboard Emoji String
const emojiTestList = require ('emoji-test-list');
let emojis = Object.keys (emojiTestList).filter (emoji => !(emojiTestList[emoji].toFullyQualified || emojiTestList[emoji].isComponent));
$.writeln ("Keyboard Emoji:", emojis.length);
$.writeln (emojis.join (""));
