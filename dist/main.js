"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path_1 = __importDefault(require("path"));
// セキュアな Electron の構成
// 参考: https://qiita.com/pochman/items/64b34e9827866664d436
var createWindow = function () {
    // レンダープロセスとなる、ウィンドウオブジェクトを作成する。
    var win = new electron_1.BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            contextIsolation: true,
            preload: path_1.default.join(__dirname, './core/preLoad.js'),
        },
    });
    // 読み込む index.html。
    // tsc でコンパイルするので、出力先の dist の相対パスで指定する。
    win.loadFile('./index.html');
    // 開発者ツールを起動する
    win.webContents.openDevTools();
};
// Electronの起動準備が終わったら、ウィンドウを作成する。
electron_1.app.whenReady().then(createWindow);
// すべての ウィンドウ が閉じたときの処理
electron_1.app.on('window-all-closed', function () {
    // macOS 以外では、メインプロセスを停止する
    // macOS では、ウインドウが閉じてもメインプロセスは停止せず
    // ドックから再度ウインドウが表示されるようにする。
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // macOS では、ウインドウが閉じてもメインプロセスは停止せず
    // ドックから再度ウインドウが表示されるようにする。
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBOEM7QUFDOUMsOENBQXdCO0FBRXhCLHFCQUFxQjtBQUNyQiwyREFBMkQ7QUFFM0QsSUFBTSxZQUFZLEdBQUc7SUFDbkIsZ0NBQWdDO0lBQ2hDLElBQU0sR0FBRyxHQUFHLElBQUksd0JBQWEsQ0FBQztRQUM1QixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxHQUFHO1FBQ1gsY0FBYyxFQUFFO1lBQ2QsZUFBZSxFQUFFLEtBQUs7WUFDdEIsdUJBQXVCLEVBQUUsS0FBSztZQUM5QixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztTQUNuRDtLQUNGLENBQUMsQ0FBQztJQUVILG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUU3QixjQUFjO0lBQ2QsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRixrQ0FBa0M7QUFDbEMsY0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUVuQyx1QkFBdUI7QUFDdkIsY0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtJQUMxQiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ2pDLGNBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNaO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUNqQixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLElBQUksd0JBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlDLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHAsIEJyb3dzZXJXaW5kb3cgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8g44K744Kt44Ol44Ki44GqIEVsZWN0cm9uIOOBruani+aIkFxuLy8g5Y+C6ICDOiBodHRwczovL3FpaXRhLmNvbS9wb2NobWFuL2l0ZW1zLzY0YjM0ZTk4Mjc4NjY2NjRkNDM2XG5cbmNvbnN0IGNyZWF0ZVdpbmRvdyA9ICgpOiB2b2lkID0+IHtcbiAgLy8g44Os44Oz44OA44O844OX44Ot44K744K544Go44Gq44KL44CB44Km44Kj44Oz44OJ44Km44Kq44OW44K444Kn44Kv44OI44KS5L2c5oiQ44GZ44KL44CCXG4gIGNvbnN0IHdpbiA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgbm9kZUludGVncmF0aW9uOiBmYWxzZSxcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbkluV29ya2VyOiBmYWxzZSxcbiAgICAgIGNvbnRleHRJc29sYXRpb246IHRydWUsXG4gICAgICBwcmVsb2FkOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jb3JlL3ByZUxvYWQuanMnKSxcbiAgICB9LFxuICB9KTtcblxuICAvLyDoqq3jgb/ovrzjgoAgaW5kZXguaHRtbOOAglxuICAvLyB0c2Mg44Gn44Kz44Oz44OR44Kk44Or44GZ44KL44Gu44Gn44CB5Ye65Yqb5YWI44GuIGRpc3Qg44Gu55u45a++44OR44K544Gn5oyH5a6a44GZ44KL44CCXG4gIHdpbi5sb2FkRmlsZSgnLi9pbmRleC5odG1sJyk7XG5cbiAgLy8g6ZaL55m66ICF44OE44O844Or44KS6LW35YuV44GZ44KLXG4gIHdpbi53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbn07XG5cbi8vIEVsZWN0cm9u44Gu6LW35YuV5rqW5YKZ44GM57WC44KP44Gj44Gf44KJ44CB44Km44Kj44Oz44OJ44Km44KS5L2c5oiQ44GZ44KL44CCXG5hcHAud2hlblJlYWR5KCkudGhlbihjcmVhdGVXaW5kb3cpO1xuXG4vLyDjgZnjgbnjgabjga4g44Km44Kj44Oz44OJ44KmIOOBjOmWieOBmOOBn+OBqOOBjeOBruWHpueQhlxuYXBwLm9uKCd3aW5kb3ctYWxsLWNsb3NlZCcsICgpID0+IHtcbiAgLy8gbWFjT1Mg5Lul5aSW44Gn44Gv44CB44Oh44Kk44Oz44OX44Ot44K744K544KS5YGc5q2i44GZ44KLXG4gIC8vIG1hY09TIOOBp+OBr+OAgeOCpuOCpOODs+ODieOCpuOBjOmWieOBmOOBpuOCguODoeOCpOODs+ODl+ODreOCu+OCueOBr+WBnOatouOBm+OBmlxuICAvLyDjg4njg4Pjgq/jgYvjgonlho3luqbjgqbjgqTjg7Pjg4njgqbjgYzooajnpLrjgZXjgozjgovjgojjgYbjgavjgZnjgovjgIJcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG4gICAgYXBwLnF1aXQoKTtcbiAgfVxufSk7XG5cbmFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gIC8vIG1hY09TIOOBp+OBr+OAgeOCpuOCpOODs+ODieOCpuOBjOmWieOBmOOBpuOCguODoeOCpOODs+ODl+ODreOCu+OCueOBr+WBnOatouOBm+OBmlxuICAvLyDjg4njg4Pjgq/jgYvjgonlho3luqbjgqbjgqTjg7Pjg4njgqbjgYzooajnpLrjgZXjgozjgovjgojjgYbjgavjgZnjgovjgIJcbiAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkge1xuICAgIGNyZWF0ZVdpbmRvdygpO1xuICB9XG59KTtcbiJdfQ==