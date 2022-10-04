var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var FileOpenerOriginal = /** @class */ (function (_super) {
    __extends(FileOpenerOriginal, _super);
    function FileOpenerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileOpenerOriginal.prototype.open = function (filePath, fileMIMEType) { return cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.uninstall = function (packageId) { return cordova(this, "uninstall", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.appIsInstalled = function (packageId) { return cordova(this, "appIsInstalled", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.showOpenWithDialog = function (filePath, fileMIMEType) { return cordova(this, "showOpenWithDialog", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.pluginName = "FileOpener";
    FileOpenerOriginal.plugin = "cordova-plugin-file-opener2";
    FileOpenerOriginal.pluginRef = "cordova.plugins.fileOpener2";
    FileOpenerOriginal.repo = "https://github.com/pwlin/cordova-plugin-file-opener2";
    FileOpenerOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return FileOpenerOriginal;
}(AwesomeCordovaNativePlugin));
var FileOpener = new FileOpenerOriginal();
export { FileOpener };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1vcGVuZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0M1RCw4QkFBMEI7Ozs7SUFheEQseUJBQUksYUFBQyxRQUFnQixFQUFFLFlBQW9CO0lBZTNDLDhCQUFTLGFBQUMsU0FBaUI7SUFlM0IsbUNBQWMsYUFBQyxTQUFpQjtJQWdCaEMsdUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxZQUFvQjs7Ozs7O3FCQTVGM0Q7RUFpQ2dDLDBCQUEwQjtTQUE3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBGaWxlIE9wZW5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSBmaWxlIG9uIHlvdXIgZGV2aWNlIGZpbGUgc3lzdGVtIHdpdGggaXRzIGRlZmF1bHQgYXBwbGljYXRpb24uXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbGVPcGVuZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlsZS1vcGVuZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVPcGVuZXI6IEZpbGVPcGVuZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlsZU9wZW5lci5vcGVuKCdwYXRoL3RvL2ZpbGUucGRmJywgJ2FwcGxpY2F0aW9uL3BkZicpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdGaWxlIGlzIG9wZW5lZCcpKVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygnRXJyb3Igb3BlbmluZyBmaWxlJywgZSkpO1xuICpcbiAqIHRoaXMuZmlsZU9wZW5lci5zaG93T3BlbldpdGhEaWFsb2coJ3BhdGgvdG8vZmlsZS5wZGYnLCAnYXBwbGljYXRpb24vcGRmJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0ZpbGUgaXMgb3BlbmVkJykpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBvcGVuaW5nIGZpbGUnLCBlKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZU9wZW5lcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtb3BlbmVyMicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5maWxlT3BlbmVyMicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcHdsaW4vY29yZG92YS1wbHVnaW4tZmlsZS1vcGVuZXIyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVPcGVuZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVuIGFuIGZpbGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoIEZpbGUgUGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1JTUVUeXBlIEZpbGUgTUlNRSBUeXBlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcbiAgICBlcnJvck5hbWU6ICdlcnJvcicsXG4gIH0pXG4gIG9wZW4oZmlsZVBhdGg6IHN0cmluZywgZmlsZU1JTUVUeXBlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmluc3RhbGxzIGEgcGFja2FnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZUlkIFBhY2thZ2UgSURcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2Vycm9yJyxcbiAgfSlcbiAgdW5pbnN0YWxsKHBhY2thZ2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXBwIGlzIGFscmVhZHkgaW5zdGFsbGVkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlSWQgUGFja2FnZSBJRFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZXJyb3InLFxuICB9KVxuICBhcHBJc0luc3RhbGxlZChwYWNrYWdlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHdpdGggc3lzdGVtIG1vZGFsIHRvIG9wZW4gZmlsZSB3aXRoIGFuIGFscmVhZHkgaW5zdGFsbGVkIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoIEZpbGUgUGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1JTUVUeXBlIEZpbGUgTUlNRSBUeXBlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcbiAgICBlcnJvck5hbWU6ICdlcnJvcicsXG4gIH0pXG4gIHNob3dPcGVuV2l0aERpYWxvZyhmaWxlUGF0aDogc3RyaW5nLCBmaWxlTUlNRVR5cGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=