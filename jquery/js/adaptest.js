/*
Adaptest.js
adaptest（跨屏测） 取自“adapt”+“test”，adaptest.js是一个方便快速测试页面的插件，将js插件加载可以在网页头部出现一个快捷测试的工具栏，目前提供了手机竖屏，横屏，平板等3种尺寸。
维护：aming <aming@qietu.com>
更新：http://kuapingce.com/
 */

$(function(){
 		
 		
 		var webbody = $('body').html();
 		
 		var webhead = $('head').html();
 		var webhead_kpcjs = $("#adaptest").prop("outerHTML");
 		
 		// 去除adaptest.js加载代码
 		webhead = webhead.replace(webhead_kpcjs,'');
 		webbody = webbody.replace(webhead_kpcjs,'');
 		
 		
 		
 		var kpcstyle = 'body { text-align:center; margin: 0 auto; }iframe { box-shadow:0 0 8px rgba(0, 0, 0, 0.35); }.kpc-toolbar { position:relative; z-index:1000; text-align:left; background-color:#f7f7f7; width:100%; border-bottom:1px solid #b8c7d5; color:#4d4d4d; box-shadow:0 0 5px rgba(0, 0, 0, 0.2); height:90px; }.kpc-toolbar *{ margin: 0; padding: 0;}.kpc-link { position:absolute; top:0; right:0; display:block; width:180px; height:90px; line-height:90px; overflow:hidden; display: block;font-size:14px; font-weight:bold; text-align:center; color:#fff !important; background:url("data:img/jpg;base64,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0p8zAAA6MWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTYtMDUtMzFUMTA6NTE6MjgrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE2LTA1LTMxVDEwOjUxOjI4KzA4OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0wNS0zMVQxMDo1MToyOCswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NDM4MmU2ZGItYTA5Yy1iNjRhLWJjNGUtN2FlYTNkYmMwODMxPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ODk3NzgwNmItMjZkYS0xMWU2LTg5NWEtZWI2NWQ0MzViZWQ4PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6MmVkMDhjYTItOGRiMi0wZTQ0LThlNjctY2M4OTFkM2Q3ZWJkPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjJlZDA4Y2EyLThkYjItMGU0NC04ZTY3LWNjODkxZDNkN2ViZDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNi0wNS0zMVQxMDo1MToyOCswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo0MzgyZTZkYi1hMDljLWI2NGEtYmM0ZS03YWVhM2RiYzA4MzE8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTYtMDUtMzFUMTA6NTE6MjgrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMDQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+Njg8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PpEDj9QAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAC8JJREFUeNrsnHuYFlUdxz8vyy6yCwpIiIhAgiVqoZCJJtrj5SEtn7ygZt7yRl6K8pZZZvaIlmWoUOKdSh/LS5lmaorlBS1YL5iKonJHQHbB5dou7O6vP853nj2MM+/M++4su7Lv93nm2dmZM2fOnO85v+s5b87M+ISgF/BD4DZgAZ0EXT4h7awAbgcuB+4HdikR1LEwBThB5/sBDwIDSgR1DFwPjA9dOwB4WH9LBLUjrgJ+EHPvc8De2zpBuQ5sJFwETIq59xJwAfB6iaD2wRnA3TEz/E7gUmBNZ9BBYYI+DfQDeuj/dcAK4AOgaSu16TjgPqBb6HqdrLjb6UToqr+HAJdI6fYNlVkOvA+8C/wXeBl4TyN4U8btGQ/8BigPXZ8JnAfMprPBzCaY2VpLj2YzqzWzZ81sspmdZ2YHm1lfM6OVx2FmNjP0vrvNrE9M+UozO1tt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") no-repeat center #f60; }.kpc-link:hover { text-decoration:none; background-color:#ff0000; }.kpc-toggle { position:absolute; bottom:-61px; right:17px; display:block; width:60px; height:60px; overflow:hidden; background:url("data:image/gif;base64,R0lGODlhPAB4AMQAAAAAAP////8AK/8AVf8rgP9Vqv+A1P+q///U////qv//1P/UgP+qVf+AK/9VAP+AVf8rAP8AAP8rK/+qqv/U1P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABUALAAAAAA8AHgAAAX/YCSOZGmeaKqW1eq+cFq1cW3L863vc77/sJ4PSEQJh8Wk6IhUEplNJw9Kk/6o0dghERkEFqZCoBEhBM4BrgmbVYkd24iYXJqX4mt29fXeChBoZwxigQ4jeCx6eyt9CQZjEX9gInZeaGqJijB9aGBeDCOVXyqKPXwBcAkFFFxvf4EBE6M4pYsnjXKoiCIGXF5gBAoQebW2dZeRCBQBoF3MjwEPCMCQmcUqB2B4j8Iin728yMTFxndqB2eTZmeYK+RCK36ADmJgBgqA7aTvpinos2We2YOFphkJfvCsGEHYT6E1hg4fQoy4hOERihEsMqGocaPDjh6tgAzpZCTJJCZP/z5JeVEJS5VTXiZcKXPmlZotb+K0eWMnzCA+c9oI+tMdUaFAj/J0obToiaZOJUJNCnXp06pRM2KNuhXKvq5ID4L9OdbruLINR6A1q3YtSbds4ZqVyxZjkXJ2a7TJm5RvTLx+ae0NfNUq4cKGD4vNShiLYsGMS7wiyM4ZZTSGpCZG8UefCESdD3VDTKVGaBOgEWA6MPpsaRiTKWM6HYH1MNKOX4R+U1sfbdsLS+kGdFmBBOKXAbat5WI3qt4lvKxurTl3itiU6ZiZVJv64mspfplp8Gb7iEcGgeMWjsIMg/G12UkQsS5z99uumd9CtW6MGDWEGHRfcPzcAoYYraHTgGcEBwg44Hrg5dURXyBJWCFGJmGYYUQscdihQjKBGKIUOJFYoks7oZjiXUGx2CIQSsEY419E0VhjT1XhmKNeW/HYI1VYARkkU2URWeRXRxKYZH5gKYkWhGMxuaRWdO1RZUNX9pOlKSEAADs=") no-repeat 0 0; }.kpc-toggle span { display:none; }.toolbar-hide-state { margin-top:-90px; }/* 移动设备预览 */.kpc-devices { width:300px; position:absolute; top:0px; right:180px; background-color: #b8c7d5;height: 90px;text-align:center; }.kpc-devices ul{}.kpc-devices li { display:inline-block; *display:inline; *zoom:1; margin:5px 11px; }.kpc-devices li a { display:block; padding:0 10px; font-size:12px; text-align:center; color:#808080; }.kpc-devices li i { display:block; width:48px; height:48px; background-repeat:no-repeat; background-position:0 0; }.kpc-icon-desktop {background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABgCAYAAABbjPFwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdhJREFUeNrsmk2qwjAUhZOHuADBsVNHigOhm3AZugGnLkE3oLvQTQgORHfguOJYnOT1PmhQ0OTZn0ThO3DB0GrOZ9uUc4k2xqhv1o/6cgEAAAAAAFBKDd8J2+3WpGka3Fi73VZJkmjfedr1Jl4ul9Ff05PJRBe6Asfj0ZrvdDqq1WoFM325XNTpdLI+er2efhsgu3Xs5263+wcRSmI+BxAfGQCrEAAAAAAAAAAAAAAAAAAAwMfpZaiXLHofK2MpSRLlysQvr4B8KWQOfiaZ32XeeQXuwv3bfaFms2lDeW7kdru99RuV9IWKarfbmf1+b8eDwUANh0P9NQ/x9Xp1joM8xP9RFZ07X+fNp0aZL8ut8bHLKC8yAAAAAAAAAAAAAAAAAAAAAEpm4k/fL+QE0FrHDsxZZDfF9gstFgtrfjQaqX6/H8z14XBQm83G+phOp9qF+LTkUF7r9dqElMx3P/8rj1KsQgAAAAAAAAAAAAAAAAAAADFT89Oaz+cPsS5WiQ9XpFSug1mYj2pe5nf5k6plv9BqtbJdhbyrMR6Pa+kLKR9hkZrNZg//pIzrmKe2rsT5fHaOq1Sp3SpVdO58nTefSu0Xym6N6Kso+4UAAAAAAAAAIKZ+BRgASVtdzkZNBrwAAAAASUVORK5CYII="); }.kpc-icon-tablet { background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABgCAYAAABbjPFwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAaFJREFUeNrs2jHOgjAUwPH2iwmr8QCyODDp5AXcPQacieABYHf3ADobiXHRkTgwsvHRnoCHpQnh/5LGxbbvp22BFt22rZpy/KmJBwAAcwcspBVut9toy9Z+v9fSOrrvMpplmbf1NkkSzRzwNWx+7W8xpIMwDFUURc4SLstSvd9vP5PYxGq1sghXUVXVYADXAQAAAAAAAAAAAAAAAAAAAAAAgHkCBm1sNU2j6rp2loRpzyvg8XjYMpl/IAgCccOHw0FtNhv1er3U5XIR1ZX012sObLdb7fNXlfSnJefEPg45JIcbYgDLKAAAAAAAAAAAwISfyE6nU/v5fEZLZr1eqziOx7kb1Vp7u23tcnL7vlBRFF7vuSX99QLc73ev41rS36CH+uPxaMaqs4S7uaXO57O/XYndbmcRruJ6vQ4GcB0AAAAAAAAAAAAAAAAAAAAAAACYJ2DQxtb3+1XP59NZEqY9r4A0TW2ZzBBaLpfihvM8N9vk9lMaov5MJ32K+aqkdIm3JsyntG7fnEwRvW7j45BDcrhhc+J9IQAAAAD4Jf4FGADsGOKop7LqbAAAAABJRU5ErkJggg=="); }.kpc-icon-mobile { background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABgCAYAAABbjPFwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlBJREFUeNrs2s+rAVEUB/Azr5eFFFmxYYWsZGFhIXvlD7CwNH+DhR1/hPgrsFeyYiMrjR0bJURRfizmuXr0XjPm9e6d3ri976mpMTl1P3PdyT1nFF3XSeZQAAAAgH8MmEwm+n6/5873eDwUj8cVRwCNRsOQmEwmLXOOxyNDG66rqsqNeOe982bXU6mUZd52uzUFzGYzPRwOK38GePazuc4K111cLpd0BfzdDNwjk8mQ2+3mzmcDH41GQotYCBAMBsnn8zn6FHojyQMAAAAAAAAAAAAAAAAAAAAAAJzY1C8WC9rtdtz5rCrhKKDf78s9A1bBClV+v582mw2rvMkFYDXSe5nxfD7TYDAwLSm+7CKORCKPc5fLRaFQSK6n0Ol0+vb5crnIBWi1WrdKNIv1ek3dbtfy+6xPwBu29gd4Q6Q/INShsQMhMnhhwCsEAAAAAAAAAAAAAACc0Ww29fl8zp3PdmqlUsmZf6OKohgSK5WKZc5qtaJ6vW64fh0DP4IBfnt87gMMx0+haZppXrvd1nnGwQ6uLeWzn811ViyPWCxmmjccDp0pq7AXnAKBAHc+G3itVhNaxEKAbDZL0WjU0acQqtMAAAAAAAAAAAAAAAAAAAAA/FeA0Ka+1+uRpmnc+SLlFFsAqqrKPQNWkc/nKZFI0Hg8pk6nIxeA1Uir1ertnL2SVi6XTWuiL7uIi8Xi49zr9VIul5PrKcReM/sah8NBLkA6nabpdHo7Z2ugUChYfl/kjS5b+wO8IdIfEOrQ2IEQam4QmnwAAAAAAILxIcAA0b+VU9efLo8AAAAASUVORK5CYII="); }	.kpc-devices li a:hover, .kpc-devices li.kpc-current { color:#666; text-decoration:none; }.kpc-devices li a:hover i, .kpc-devices li.kpc-current i { background-position:0 -48px; }.kpc-iframe { /*width:100%;*/ overflow-x:hidden; margin:0 auto; }';

 		$("<style></style>").text(kpcstyle).appendTo($("head"));
 		
 		
 		
 		var kpchtml = '<div class="kpc-toolbar"> '+
    '<div class="kpc-devices">'+
    	'<ul>'+
            '<li class="kpc-current"><a class="kpc-desktop-btn" href="javascript:;" title="PC电脑大小浏览"><i class="kpc-icon-desktop"></i><span>PC电脑</span></a></li>'+
            '<li><a class="kpc-tablet-btn" href="javascript:;" title="平板大小浏览"><i class="kpc-icon-tablet"></i><span>平板</span>                    </a></li>'+
            '<li><a class="kpc-mobile-btn" href="javascript:;" title="手机大小浏览"><i class="kpc-icon-mobile"></i><span>手机</span></a></li>'+
        '</ul>'+
    '</div>'+
    '<a class="kpc-link" href="http://www.kuapingce.com/?cj" target="_blank"></a>  '+ 
    '<a href="javascript:;" class="kpc-toggle" title="收起超级体验"><span>收起超级体验</span></a>'+
	
'</div>'+


'<iframe frameborder="0" border="0" class="kpc-iframe" width="100%"></iframe>';


		$("body").empty().append(kpchtml);
		
		setTimeout(function(){
			$('iframe').contents().find("body").html(webbody);
			$('iframe').contents().find("head").html(webhead);
		},10)
 		
		
	
 	})








//跨屏测方法

function RefreshIframe() {
        var ele = jQuery(".kpc-toggle");
        hideToolbar(ele);
        //var $websiteIframe = jQuery(".kpc-iframe");
        //$websiteIframe.location.href = $websiteIframe.location.pathname + $websiteIframe.location.search;
    }


    //设置iframe高度
    function switcher_iframe_height() {
        
	        $body = jQuery("body")
	        $websiteIframe = jQuery(".kpc-iframe");

        if ($body.hasClass("toggle")) return;

        var $w_height = jQuery(window).height(),
	            $b_height = $('.kpc-toolbar').hasClass("toolbar-hide-state") ? 0 : jQuery(".kpc-toolbar").height(),
	            $i_height = $w_height - $b_height;

        $websiteIframe.height($i_height);
    }


    function hideToolbar(ele) {
        $('.kpc-toolbar').addClass("toolbar-hide-state").attr("title", "展开超级体验");
        switcher_iframe_height();
    }
    function showToolbar(ele) {
        $('.kpc-toolbar').removeClass("toolbar-hide-state").attr("title", "收起超级体验");
        switcher_iframe_height();
    }

    function Toolbar() {
        //隐藏、显示工具条
        jQuery(".kpc-toggle").on('click',function(){
        	 if( jQuery(".kpc-toolbar").hasClass("toolbar-hide-state") ){
				        showToolbar();
			        }else{
			  	        hideToolbar();
			        }
        })
    }

    jQuery(document).ready(function () {


        Toolbar();

        //初始化执行设置iframe高度
        switcher_iframe_height();

        // 设置移动网站尺寸 Switching views
        var $websiteIframe = jQuery(".kpc-iframe");
        jQuery(".kpc-desktop-btn").on("click", function () {
            $websiteIframe.animate({ "width": "100%" });
            return false;
        });

        jQuery(".kpc-tablet-btn").on("click", function () {
            $websiteIframe.animate({ "width": "800px" }); return false;
        });
        jQuery(".kpc-tablet-horizontal-btn").on("click", function () {
            $websiteIframe.animate({ "width": "1024px" }); return false;
        });

        jQuery(".kpc-mobile-btn").on("click", function () {
            $websiteIframe.animate({ "width": "480px" }); return false;
        });
        jQuery(".kpc-mobile-horizontal-btn").on("click", function () {
            $websiteIframe.animate({ "width": "640px" }); return false;
        });

        // 高亮当前选择的移动设备
        jQuery(".kpc-devices > ul > li > a").on('click',function(){
        	var currentElement = jQuery(this).parent();
            currentElement.addClass("kpc-current").siblings().removeClass("kpc-current");
        })

    });

    jQuery(window).resize(function () { switcher_iframe_height(); });
    jQuery(window).load(function () { switcher_iframe_height(); window.setTimeout("RefreshIframe()",30000);});