"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path_1 = __importDefault(require("path"));
var win;
// セキュアな Electron の構成
// 参考: https://qiita.com/pochman/items/64b34e9827866664d436
var createWindow = function () {
    // レンダープロセスとなる、ウィンドウオブジェクトを作成する。
    win = new electron_1.BrowserWindow({
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
    win.loadFile(path_1.default.join(__dirname, './index.html'));
    if (process.argv.find(function (arg) { return arg === '--debug'; })) {
        win.webContents.openDevTools();
    }
    // ブラウザウィンドウを閉じたときのイベントハンドラ
    win.on('closed', function () {
        // 閉じたウィンドウオブジェクトにはアクセスできない
        win = null;
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FHa0I7QUFDbEIsOENBQXdCO0FBRXhCLElBQUksR0FBRyxDQUFDO0FBRVIscUJBQXFCO0FBQ3JCLDJEQUEyRDtBQUUzRCxJQUFNLFlBQVksR0FBRztJQUNuQixnQ0FBZ0M7SUFDaEMsR0FBRyxHQUFHLElBQUksd0JBQWEsQ0FBQztRQUN0QixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxHQUFHO1FBQ1gsY0FBYyxFQUFFO1lBQ2QsZUFBZSxFQUFFLEtBQUs7WUFDdEIsdUJBQXVCLEVBQUUsS0FBSztZQUM5QixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztTQUNuRDtLQUNGLENBQUMsQ0FBQztJQUVILG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRW5ELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLEtBQUssU0FBUyxFQUFqQixDQUFpQixDQUFDLEVBQUU7UUFDakQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtLQUMvQjtJQUVELDJCQUEyQjtJQUMzQixHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUNmLDJCQUEyQjtRQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFBO0lBQ1osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUM7QUFFRixrQ0FBa0M7QUFDbEMsY0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUVuQyx1QkFBdUI7QUFDdkIsY0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtJQUMxQiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ2pDLGNBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNaO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUNqQixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLElBQUksd0JBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlDLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhcHAsXG4gIEJyb3dzZXJXaW5kb3dcbn0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmxldCB3aW47XG5cbi8vIOOCu+OCreODpeOCouOBqiBFbGVjdHJvbiDjga7mp4vmiJBcbi8vIOWPguiAgzogaHR0cHM6Ly9xaWl0YS5jb20vcG9jaG1hbi9pdGVtcy82NGIzNGU5ODI3ODY2NjY0ZDQzNlxuXG5jb25zdCBjcmVhdGVXaW5kb3cgPSAoKTogdm9pZCA9PiB7XG4gIC8vIOODrOODs+ODgOODvOODl+ODreOCu+OCueOBqOOBquOCi+OAgeOCpuOCo+ODs+ODieOCpuOCquODluOCuOOCp+OCr+ODiOOCkuS9nOaIkOOBmeOCi+OAglxuICB3aW4gPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgd2lkdGg6IDEyMDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogZmFsc2UsXG4gICAgICBub2RlSW50ZWdyYXRpb25JbldvcmtlcjogZmFsc2UsXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiB0cnVlLFxuICAgICAgcHJlbG9hZDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY29yZS9wcmVMb2FkLmpzJyksXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8g6Kqt44G/6L6844KAIGluZGV4Lmh0bWzjgIJcbiAgLy8gdHNjIOOBp+OCs+ODs+ODkeOCpOODq+OBmeOCi+OBruOBp+OAgeWHuuWKm+WFiOOBriBkaXN0IOOBruebuOWvvuODkeOCueOBp+aMh+WumuOBmeOCi+OAglxuICB3aW4ubG9hZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJy4vaW5kZXguaHRtbCcpKTtcblxuICBpZiAocHJvY2Vzcy5hcmd2LmZpbmQoKGFyZykgPT4gYXJnID09PSAnLS1kZWJ1ZycpKSB7XG4gICAgd2luLndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gIH1cblxuICAvLyDjg5bjg6njgqbjgrbjgqbjgqPjg7Pjg4njgqbjgpLplonjgZjjgZ/jgajjgY3jga7jgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6lcbiAgd2luLm9uKCdjbG9zZWQnLCAoKSA9PiB7XG4gICAgLy8g6ZaJ44GY44Gf44Km44Kj44Oz44OJ44Km44Kq44OW44K444Kn44Kv44OI44Gr44Gv44Ki44Kv44K744K544Gn44GN44Gq44GEXG4gICAgd2luID0gbnVsbFxuICB9KVxufTtcblxuLy8gRWxlY3Ryb27jga7otbfli5XmupblgpnjgYzntYLjgo/jgaPjgZ/jgonjgIHjgqbjgqPjg7Pjg4njgqbjgpLkvZzmiJDjgZnjgovjgIJcbmFwcC53aGVuUmVhZHkoKS50aGVuKGNyZWF0ZVdpbmRvdyk7XG5cbi8vIOOBmeOBueOBpuOBriDjgqbjgqPjg7Pjg4njgqYg44GM6ZaJ44GY44Gf44Go44GN44Gu5Yem55CGXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuICAvLyBtYWNPUyDku6XlpJbjgafjga/jgIHjg6HjgqTjg7Pjg5fjg63jgrvjgrnjgpLlgZzmraLjgZnjgotcbiAgLy8gbWFjT1Mg44Gn44Gv44CB44Km44Kk44Oz44OJ44Km44GM6ZaJ44GY44Gm44KC44Oh44Kk44Oz44OX44Ot44K744K544Gv5YGc5q2i44Gb44GaXG4gIC8vIOODieODg+OCr+OBi+OCieWGjeW6puOCpuOCpOODs+ODieOCpuOBjOihqOekuuOBleOCjOOCi+OCiOOBhuOBq+OBmeOCi+OAglxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICBhcHAucXVpdCgpO1xuICB9XG59KTtcblxuYXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcbiAgLy8gbWFjT1Mg44Gn44Gv44CB44Km44Kk44Oz44OJ44Km44GM6ZaJ44GY44Gm44KC44Oh44Kk44Oz44OX44Ot44K744K544Gv5YGc5q2i44Gb44GaXG4gIC8vIOODieODg+OCr+OBi+OCieWGjeW6puOCpuOCpOODs+ODieOCpuOBjOihqOekuuOBleOCjOOCi+OCiOOBhuOBq+OBmeOCi+OAglxuICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgY3JlYXRlV2luZG93KCk7XG4gIH1cbn0pOyJdfQ==