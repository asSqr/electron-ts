"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__private__ = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var os_1 = __importDefault(require("os"));
var path_1 = __importDefault(require("path"));
var shortid_1 = __importDefault(require("shortid"));
// OSごとのユーザーのプロファイルフォルダに保存される
var dataFilePath = path_1.default.join(os_1.default.homedir(), 'todo.json');
/** 遅延処理確認用：指定ミリ秒 待つ関数 */
var setTimeoutPromise = function (count) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, count);
    });
};
// テストのためにJSONの変換処理を別に定義する
exports.__private__ = {
    reviver: function (key, value) {
        if (key === 'deadline') {
            return new Date(value);
        }
        else {
            return value;
        }
    },
    replacer: function (key, value) {
        if (key !== 'deadline') {
            return value;
        }
        return new Date(value).toISOString();
    },
};
var loadTaskList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var exist, jsonData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_extra_1.default.pathExists(dataFilePath)];
            case 1:
                exist = _a.sent();
                if (!!exist) return [3 /*break*/, 3];
                // ...(c)
                // データファイルがなけれが、ファイルを作成して、初期データを保存する
                fs_extra_1.default.ensureFileSync(dataFilePath);
                return [4 /*yield*/, fs_extra_1.default.writeJSON(dataFilePath, { data: [] })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [4 /*yield*/, fs_extra_1.default.readJSON(dataFilePath, {
                    // 日付型は、数値で格納しているので、日付型に変換する
                    reviver: exports.__private__.reviver,
                })];
            case 4:
                jsonData = (_a.sent());
                // 早すぎて非同期処理を実感できないので、ちょっと時間がかかる処理のシミュレート
                return [4 /*yield*/, setTimeoutPromise(500)];
            case 5:
                // 早すぎて非同期処理を実感できないので、ちょっと時間がかかる処理のシミュレート
                _a.sent();
                return [2 /*return*/, jsonData.data];
        }
    });
}); };
var saveTaskList = function (taskList) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_extra_1.default.writeJSON(dataFilePath, { data: taskList }, {
                    replacer: exports.__private__.replacer,
                    spaces: 2,
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var saveTask = function (task) { return __awaiter(void 0, void 0, void 0, function () {
    var taskList, existTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // 早すぎて非同期処理を実感できないので、ちょっと時間がかかる処理のシミュレート
            return [4 /*yield*/, setTimeoutPromise(500)];
            case 1:
                // 早すぎて非同期処理を実感できないので、ちょっと時間がかかる処理のシミュレート
                _a.sent();
                return [4 /*yield*/, loadTaskList()];
            case 2:
                taskList = _a.sent();
                existTask = taskList.find(function (pTask) { return pTask.id === task.id; });
                if (!task.id || !existTask) {
                    task.id = shortid_1.default();
                    taskList.push(task);
                }
                else {
                    existTask.complete = task.complete;
                    existTask.deadline = task.deadline;
                    existTask.taskName = task.taskName;
                }
                return [4 /*yield*/, saveTaskList(taskList)];
            case 3:
                _a.sent();
                return [2 /*return*/, taskList];
        }
    });
}); };
var deleteTask = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var taskList, deletedTaskList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // 早すぎて非同期処理を実感できないので、ちょっと時間がかかる処理のシミュレート
            return [4 /*yield*/, setTimeoutPromise(500)];
            case 1:
                // 早すぎて非同期処理を実感できないので、ちょっと時間がかかる処理のシミュレート
                _a.sent();
                return [4 /*yield*/, loadTaskList()];
            case 2:
                taskList = _a.sent();
                deletedTaskList = taskList.filter(function (task) { return task.id !== id; });
                return [4 /*yield*/, saveTaskList(deletedTaskList)];
            case 3:
                _a.sent();
                return [2 /*return*/, deletedTaskList];
        }
    });
}); };
var core = {
    loadTaskList: loadTaskList,
    saveTask: saveTask,
    deleteTask: deleteTask,
};
exports.default = core;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBMEI7QUFDMUIsMENBQW9CO0FBQ3BCLDhDQUF3QjtBQUN4QixvREFBOEI7QUFJOUIsNkJBQTZCO0FBQzdCLElBQU0sWUFBWSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsWUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRTFELHlCQUF5QjtBQUN6QixJQUFNLGlCQUFpQixHQUFHLFVBQUMsS0FBYTtJQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztRQUN4QixVQUFVLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsMEJBQTBCO0FBQ2IsUUFBQSxXQUFXLEdBQUc7SUFDekIsT0FBTyxFQUFFLFVBQUMsR0FBVyxFQUFFLEtBQWM7UUFDbkMsSUFBSSxHQUFHLEtBQUssVUFBVSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBZSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBQ0QsUUFBUSxFQUFFLFVBQUMsR0FBVyxFQUFFLEtBQWM7UUFDcEMsSUFBSSxHQUFHLEtBQUssVUFBVSxFQUFFO1lBQ3RCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksSUFBSSxDQUFDLEtBQWUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pELENBQUM7Q0FDRixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQUc7Ozs7b0JBQ0wscUJBQU0sa0JBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUE7O2dC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QUE7Q0FDWCxDQUFDO0FBRUYsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IHsgSVRhc2sgfSBmcm9tICcuLi9zdGF0ZXMvSVRhc2snO1xuaW1wb3J0IElDb3JlIGZyb20gJy4vSUNvcmUnO1xuXG4vLyBPU+OBlOOBqOOBruODpuODvOOCtuODvOOBruODl+ODreODleOCoeOCpOODq+ODleOCqeODq+ODgOOBq+S/neWtmOOBleOCjOOCi1xuY29uc3QgZGF0YUZpbGVQYXRoID0gcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJ3RvZG8uanNvbicpO1xuXG4vKiog6YGF5bu25Yem55CG56K66KqN55So77ya5oyH5a6a44Of44Oq56eSIOW+heOBpOmWouaVsCAqL1xuY29uc3Qgc2V0VGltZW91dFByb21pc2UgPSAoY291bnQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgY291bnQpO1xuICB9KTtcbn07XG5cbi8vIOODhuOCueODiOOBruOBn+OCgeOBq0pTT07jga7lpInmj5vlh6bnkIbjgpLliKXjgavlrprnvqnjgZnjgotcbmV4cG9ydCBjb25zdCBfX3ByaXZhdGVfXyA9IHtcbiAgcmV2aXZlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IHVua25vd24gPT4ge1xuICAgIGlmIChrZXkgPT09ICdkZWFkbGluZScpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9LFxuICByZXBsYWNlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IHVua25vd24gPT4ge1xuICAgIGlmIChrZXkgIT09ICdkZWFkbGluZScpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlIGFzIHN0cmluZykudG9JU09TdHJpbmcoKTtcbiAgfSxcbn07XG5cbmNvbnN0IGxvYWRUYXNrTGlzdCA9IGFzeW5jICgpOiBQcm9taXNlPElUYXNrW10+ID0+IHtcbiAgY29uc3QgZXhpc3QgPSBhd2FpdCBmcy5wYXRoRXhpc3RzKGRhdGFGaWxlUGF0aCk7IC8vIC4uLihiKVxuICBpZiAoIWV4aXN0KSB7XG4gICAgLy8gLi4uKGMpXG4gICAgLy8g44OH44O844K/44OV44Kh44Kk44Or44GM44Gq44GR44KM44GM44CB44OV44Kh44Kk44Or44KS5L2c5oiQ44GX44Gm44CB5Yid5pyf44OH44O844K/44KS5L+d5a2Y44GZ44KLXG4gICAgZnMuZW5zdXJlRmlsZVN5bmMoZGF0YUZpbGVQYXRoKTtcbiAgICBhd2FpdCBmcy53cml0ZUpTT04oZGF0YUZpbGVQYXRoLCB7IGRhdGE6IFtdIH0pO1xuICB9XG4gIC8vIOODh+ODvOOCv+ODleOCoeOCpOODq+OCkuiqreOBv+i+vOOCgCAuLi4oZClcbiAgY29uc3QganNvbkRhdGEgPSAoYXdhaXQgZnMucmVhZEpTT04oZGF0YUZpbGVQYXRoLCB7XG4gICAgLy8g5pel5LuY5Z6L44Gv44CB5pWw5YCk44Gn5qC857SN44GX44Gm44GE44KL44Gu44Gn44CB5pel5LuY5Z6L44Gr5aSJ5o+b44GZ44KLXG4gICAgcmV2aXZlcjogX19wcml2YXRlX18ucmV2aXZlcixcbiAgfSkpIGFzIHsgZGF0YTogSVRhc2tbXSB9O1xuICAvLyDml6njgZnjgY7jgabpnZ7lkIzmnJ/lh6bnkIbjgpLlrp/mhJ/jgafjgY3jgarjgYTjga7jgafjgIHjgaHjgofjgaPjgajmmYLplpPjgYzjgYvjgYvjgovlh6bnkIbjga7jgrfjg5/jg6Xjg6zjg7zjg4hcbiAgYXdhaXQgc2V0VGltZW91dFByb21pc2UoNTAwKTtcbiAgcmV0dXJuIGpzb25EYXRhLmRhdGE7XG59O1xuXG5jb25zdCBzYXZlVGFza0xpc3QgPSBhc3luYyAodGFza0xpc3Q6IElUYXNrW10pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgYXdhaXQgZnMud3JpdGVKU09OKFxuICAgIGRhdGFGaWxlUGF0aCxcbiAgICB7IGRhdGE6IHRhc2tMaXN0IH0sXG4gICAge1xuICAgICAgcmVwbGFjZXI6IF9fcHJpdmF0ZV9fLnJlcGxhY2VyLFxuICAgICAgc3BhY2VzOiAyLFxuICAgIH0sXG4gICk7XG59O1xuXG5jb25zdCBzYXZlVGFzayA9IGFzeW5jICh0YXNrOiBJVGFzayk6IFByb21pc2U8SVRhc2tbXT4gPT4ge1xuICAvLyDml6njgZnjgY7jgabpnZ7lkIzmnJ/lh6bnkIbjgpLlrp/mhJ/jgafjgY3jgarjgYTjga7jgafjgIHjgaHjgofjgaPjgajmmYLplpPjgYzjgYvjgYvjgovlh6bnkIbjga7jgrfjg5/jg6Xjg6zjg7zjg4hcbiAgYXdhaXQgc2V0VGltZW91dFByb21pc2UoNTAwKTtcbiAgY29uc3QgdGFza0xpc3QgPSBhd2FpdCBsb2FkVGFza0xpc3QoKTtcbiAgY29uc3QgZXhpc3RUYXNrID0gdGFza0xpc3QuZmluZChwVGFzayA9PiBwVGFzay5pZCA9PT0gdGFzay5pZCk7XG4gIGlmICghdGFzay5pZCB8fCAhZXhpc3RUYXNrKSB7XG4gICAgdGFzay5pZCA9IHNob3J0aWQoKTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xuICB9IGVsc2Uge1xuICAgIGV4aXN0VGFzay5jb21wbGV0ZSA9IHRhc2suY29tcGxldGU7XG4gICAgZXhpc3RUYXNrLmRlYWRsaW5lID0gdGFzay5kZWFkbGluZTtcbiAgICBleGlzdFRhc2sudGFza05hbWUgPSB0YXNrLnRhc2tOYW1lO1xuICB9XG4gIGF3YWl0IHNhdmVUYXNrTGlzdCh0YXNrTGlzdCk7XG4gIHJldHVybiB0YXNrTGlzdDtcbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8SVRhc2tbXT4gPT4ge1xuICAvLyDml6njgZnjgY7jgabpnZ7lkIzmnJ/lh6bnkIbjgpLlrp/mhJ/jgafjgY3jgarjgYTjga7jgafjgIHjgaHjgofjgaPjgajmmYLplpPjgYzjgYvjgYvjgovlh6bnkIbjga7jgrfjg5/jg6Xjg6zjg7zjg4hcbiAgYXdhaXQgc2V0VGltZW91dFByb21pc2UoNTAwKTtcbiAgY29uc3QgdGFza0xpc3QgPSBhd2FpdCBsb2FkVGFza0xpc3QoKTtcbiAgY29uc3QgZGVsZXRlZFRhc2tMaXN0ID0gdGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gaWQpO1xuICBhd2FpdCBzYXZlVGFza0xpc3QoZGVsZXRlZFRhc2tMaXN0KTtcbiAgcmV0dXJuIGRlbGV0ZWRUYXNrTGlzdDtcbn07XG5cbmNvbnN0IGNvcmU6IElDb3JlID0ge1xuICBsb2FkVGFza0xpc3QsXG4gIHNhdmVUYXNrLFxuICBkZWxldGVUYXNrLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiJdfQ==