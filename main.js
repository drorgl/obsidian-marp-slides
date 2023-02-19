/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MarpSlides
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/views/marpPreviewView.ts
var import_obsidian = require("obsidian");
var MARP_PREVIEW_VIEW = "marp-preview-view";
var MarpPreviewView = class extends import_obsidian.ItemView {
  constructor(leaf) {
    super(leaf);
  }
  getViewType() {
    return MARP_PREVIEW_VIEW;
  }
  getDisplayText() {
    return "Example view";
  }
  async onOpen() {
    console.log("Marp Preview onOpen View");
  }
  async onClose() {
    console.log("Marp Preview onClose View");
  }
  async onChange() {
    console.log("Marp Preview onChange View");
  }
  displaySlides() {
    console.log("Marp Preview Display Slides");
    const container = this.containerEl.children[1];
    container.empty();
    container.innerHTML = "<div>Hello Word!</div>";
  }
};

// src/main.ts
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var MarpSlides = class extends import_obsidian2.Plugin {
  async onload() {
    await this.loadSettings();
    this.registerView(
      MARP_PREVIEW_VIEW,
      (leaf) => new MarpPreviewView(leaf)
    );
    const ribbonIconEl = this.addRibbonIcon("slides", "Show Slide Preview", async () => {
      await this.showView();
    });
    this.addCommand({
      id: "open-sample-modal-simple",
      name: "Open sample modal (simple)",
      callback: () => {
        new MarpSlidesModal(this.app).open();
      }
    });
    this.addCommand({
      id: "sample-editor-command",
      name: "Sample editor command",
      editorCallback: (editor, view) => {
        console.log(editor.getSelection());
        editor.replaceSelection("Sample Editor Command");
      }
    });
    this.addCommand({
      id: "open-sample-modal-complex",
      name: "Open sample modal (complex)",
      checkCallback: (checking) => {
        const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
        if (markdownView) {
          if (!checking) {
            new MarpSlidesModal(this.app).open();
          }
          return true;
        }
      }
    });
    this.addSettingTab(new MarpSlidesSettingTab(this.app, this));
  }
  onunload() {
    this.app.workspace.detachLeavesOfType(MARP_PREVIEW_VIEW);
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async activateView() {
    this.app.workspace.detachLeavesOfType(MARP_PREVIEW_VIEW);
    await this.app.workspace.getRightLeaf(false).setViewState({
      type: MARP_PREVIEW_VIEW,
      active: true
    });
    this.app.workspace.revealLeaf(
      this.app.workspace.getLeavesOfType(MARP_PREVIEW_VIEW)[0]
    );
  }
  async showView() {
    const targetDocument = this.app.workspace.getActiveFile();
    if (!targetDocument) {
      return;
    }
    console.log(targetDocument);
    await this.activateView();
    const instance = this.getViewInstance();
    instance.displaySlides();
  }
  getViewInstance() {
    for (const leaf of this.app.workspace.getLeavesOfType(MARP_PREVIEW_VIEW)) {
      const view = leaf.view;
      console.log(view);
      if (view instanceof MarpPreviewView) {
        return view;
      }
    }
    return new MarpPreviewView(this.app.workspace.getLeavesOfType(MARP_PREVIEW_VIEW)[0]);
  }
};
var MarpSlidesModal = class extends import_obsidian2.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Woah!");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var MarpSlidesSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for my awesome plugin." });
    new import_obsidian2.Setting(containerEl).setName("Setting #1").setDesc("It's a secret").addText((text) => text.setPlaceholder("Enter your secret").setValue(this.plugin.settings.mySetting).onChange(async (value) => {
      console.log("Secret: " + value);
      this.plugin.settings.mySetting = value;
      await this.plugin.saveSettings();
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL3ZpZXdzL21hcnBQcmV2aWV3Vmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5pbXBvcnQgeyBNQVJQX1BSRVZJRVdfVklFVywgTWFycFByZXZpZXdWaWV3IH0gZnJvbSAnLi92aWV3cy9tYXJwUHJldmlld1ZpZXcnO1xuXG4vLyBSZW1lbWJlciB0byByZW5hbWUgdGhlc2UgY2xhc3NlcyBhbmQgaW50ZXJmYWNlcyFcblxuaW50ZXJmYWNlIE1hcnBTbGlkZXNTZXR0aW5ncyB7XG5cdG15U2V0dGluZzogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBNYXJwU2xpZGVzU2V0dGluZ3MgPSB7XG5cdG15U2V0dGluZzogJ2RlZmF1bHQnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcnBTbGlkZXMgZXh0ZW5kcyBQbHVnaW4ge1xuXHRzZXR0aW5nczogTWFycFNsaWRlc1NldHRpbmdzO1xuXG5cdGFzeW5jIG9ubG9hZCgpIHtcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG5cdFx0dGhpcy5yZWdpc3RlclZpZXcoXG5cdFx0XHRNQVJQX1BSRVZJRVdfVklFVyxcblx0XHRcdChsZWFmKSA9PiBuZXcgTWFycFByZXZpZXdWaWV3KGxlYWYpXG5cdFx0KTtcblxuXHRcdGNvbnN0IHJpYmJvbkljb25FbCA9IHRoaXMuYWRkUmliYm9uSWNvbignc2xpZGVzJywgJ1Nob3cgU2xpZGUgUHJldmlldycsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IHRoaXMuc2hvd1ZpZXcoKTtcblx0XHR9KTtcblx0XHRcblx0XHQvLyAvLyBUaGlzIGNyZWF0ZXMgYW4gaWNvbiBpbiB0aGUgbGVmdCByaWJib24uXG5cdFx0Ly8gY29uc3QgcmliYm9uSWNvbkVsID0gdGhpcy5hZGRSaWJib25JY29uKCdkaWNlJywgJ1NhbXBsZSBQbHVnaW4nLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0Ly8gXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGljb24uXG5cdFx0Ly8gXHRuZXcgTm90aWNlKCdUaGlzIGlzIGEgbm90aWNlIScpO1xuXHRcdC8vIH0pO1xuXG5cdFx0Ly8gLy8gUGVyZm9ybSBhZGRpdGlvbmFsIHRoaW5ncyB3aXRoIHRoZSByaWJib25cblx0XHQvL3JpYmJvbkljb25FbC5hZGRDbGFzcygnbXktcGx1Z2luLXJpYmJvbi1jbGFzcycpO1xuXG5cblxuXG5cdFx0Ly8gVGhpcyBhZGRzIGEgc2ltcGxlIGNvbW1hbmQgdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIGFueXdoZXJlXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnb3Blbi1zYW1wbGUtbW9kYWwtc2ltcGxlJyxcblx0XHRcdG5hbWU6ICdPcGVuIHNhbXBsZSBtb2RhbCAoc2ltcGxlKScsXG5cdFx0XHRjYWxsYmFjazogKCkgPT4ge1xuXHRcdFx0XHRuZXcgTWFycFNsaWRlc01vZGFsKHRoaXMuYXBwKS5vcGVuKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gVGhpcyBhZGRzIGFuIGVkaXRvciBjb21tYW5kIHRoYXQgY2FuIHBlcmZvcm0gc29tZSBvcGVyYXRpb24gb24gdGhlIGN1cnJlbnQgZWRpdG9yIGluc3RhbmNlXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnc2FtcGxlLWVkaXRvci1jb21tYW5kJyxcblx0XHRcdG5hbWU6ICdTYW1wbGUgZWRpdG9yIGNvbW1hbmQnLFxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgdmlldzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVkaXRvci5nZXRTZWxlY3Rpb24oKSk7XG5cdFx0XHRcdGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKCdTYW1wbGUgRWRpdG9yIENvbW1hbmQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvLyBUaGlzIGFkZHMgYSBjb21wbGV4IGNvbW1hbmQgdGhhdCBjYW4gY2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgYXBwIGFsbG93cyBleGVjdXRpb24gb2YgdGhlIGNvbW1hbmRcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdvcGVuLXNhbXBsZS1tb2RhbC1jb21wbGV4Jyxcblx0XHRcdG5hbWU6ICdPcGVuIHNhbXBsZSBtb2RhbCAoY29tcGxleCknLFxuXHRcdFx0Y2hlY2tDYWxsYmFjazogKGNoZWNraW5nOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdC8vIENvbmRpdGlvbnMgdG8gY2hlY2tcblx0XHRcdFx0Y29uc3QgbWFya2Rvd25WaWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcblx0XHRcdFx0aWYgKG1hcmtkb3duVmlldykge1xuXHRcdFx0XHRcdC8vIElmIGNoZWNraW5nIGlzIHRydWUsIHdlJ3JlIHNpbXBseSBcImNoZWNraW5nXCIgaWYgdGhlIGNvbW1hbmQgY2FuIGJlIHJ1bi5cblx0XHRcdFx0XHQvLyBJZiBjaGVja2luZyBpcyBmYWxzZSwgdGhlbiB3ZSB3YW50IHRvIGFjdHVhbGx5IHBlcmZvcm0gdGhlIG9wZXJhdGlvbi5cblx0XHRcdFx0XHRpZiAoIWNoZWNraW5nKSB7XG5cdFx0XHRcdFx0XHRuZXcgTWFycFNsaWRlc01vZGFsKHRoaXMuYXBwKS5vcGVuKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVGhpcyBjb21tYW5kIHdpbGwgb25seSBzaG93IHVwIGluIENvbW1hbmQgUGFsZXR0ZSB3aGVuIHRoZSBjaGVjayBmdW5jdGlvbiByZXR1cm5zIHRydWVcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gVGhpcyBhZGRzIGEgc2V0dGluZ3MgdGFiIHNvIHRoZSB1c2VyIGNhbiBjb25maWd1cmUgdmFyaW91cyBhc3BlY3RzIG9mIHRoZSBwbHVnaW5cblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IE1hcnBTbGlkZXNTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cblx0XHQvLyBJZiB0aGUgcGx1Z2luIGhvb2tzIHVwIGFueSBnbG9iYWwgRE9NIGV2ZW50cyAob24gcGFydHMgb2YgdGhlIGFwcCB0aGF0IGRvZXNuJ3QgYmVsb25nIHRvIHRoaXMgcGx1Z2luKVxuXHRcdC8vIFVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGlzIHBsdWdpbiBpcyBkaXNhYmxlZC5cblx0XHQvLyB0aGlzLnJlZ2lzdGVyRG9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdjbGljaycsIGV2dCk7XG5cdFx0Ly8gfSk7XG5cblx0XHQvLyBXaGVuIHJlZ2lzdGVyaW5nIGludGVydmFscywgdGhpcyBmdW5jdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgY2xlYXIgdGhlIGludGVydmFsIHdoZW4gdGhlIHBsdWdpbiBpcyBkaXNhYmxlZC5cblx0XHQvL3RoaXMucmVnaXN0ZXJJbnRlcnZhbCh3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4gY29uc29sZS5sb2coJ3NldEludGVydmFsJyksIDUgKiA2MCAqIDEwMDApKTtcblx0fVxuXG5cdG9udW5sb2FkKCkge1xuXHRcdHRoaXMuYXBwLndvcmtzcGFjZS5kZXRhY2hMZWF2ZXNPZlR5cGUoTUFSUF9QUkVWSUVXX1ZJRVcpO1xuXHR9XG5cblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuXHR9XG5cblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG5cdH1cblxuXHRhc3luYyBhY3RpdmF0ZVZpZXcoKSB7XG5cdFx0dGhpcy5hcHAud29ya3NwYWNlLmRldGFjaExlYXZlc09mVHlwZShNQVJQX1BSRVZJRVdfVklFVyk7XG5cdFxuXHRcdGF3YWl0IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRSaWdodExlYWYoZmFsc2UpLnNldFZpZXdTdGF0ZSh7XG5cdFx0ICB0eXBlOiBNQVJQX1BSRVZJRVdfVklFVyxcblx0XHQgIGFjdGl2ZTogdHJ1ZSxcblx0XHR9KTtcblx0XG5cdFx0dGhpcy5hcHAud29ya3NwYWNlLnJldmVhbExlYWYoXG5cdFx0ICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKE1BUlBfUFJFVklFV19WSUVXKVswXVxuXHRcdCk7XG5cdCAgfVxuXG5cdGFzeW5jIHNob3dWaWV3KCkge1xuXHRcdGNvbnN0IHRhcmdldERvY3VtZW50ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcblxuXHRcdGlmICghdGFyZ2V0RG9jdW1lbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyh0YXJnZXREb2N1bWVudCk7XG5cblx0XHQvLyBpZiAodGFyZ2V0RG9jdW1lbnQgPT0gdGhpcy50YXJnZXQgJiYgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShSRVZFQUxfUFJFVklFV19WSUVXKS5sZW5ndGggPiAwKSB7XG5cdFx0Ly8gXHRyZXR1cm47XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gdGhpcy50YXJnZXQgPSB0YXJnZXREb2N1bWVudDtcblx0XHRhd2FpdCB0aGlzLmFjdGl2YXRlVmlldygpO1xuXG5cdFx0Ly8gY29uc3QgdXJsID0gdGhpcy5yZXZlYWxTZXJ2ZXIuZ2V0VXJsKCk7XG5cdFx0Ly8gdXJsLnBhdGhuYW1lID0gdGhpcy5maXhlZEVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnRhcmdldC5wYXRoKTtcblxuXHRcdC8vIHRoaXMub3BlblVybCh1cmwpO1xuXHRcdC8vIHRoaXMuc2hvd01vdG0oKTtcblxuXHRcdGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRWaWV3SW5zdGFuY2UoKTtcblx0XHRpbnN0YW5jZS5kaXNwbGF5U2xpZGVzKCk7XG5cdH1cblxuXHRnZXRWaWV3SW5zdGFuY2UoKSA6IE1hcnBQcmV2aWV3VmlldyB7XG5cdFx0Zm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoTUFSUF9QUkVWSUVXX1ZJRVcpKSB7XG5cdFx0XHRjb25zdCB2aWV3ID0gbGVhZi52aWV3O1xuXHRcdFx0Y29uc29sZS5sb2codmlldyk7XG5cdFx0XHRpZiAodmlldyBpbnN0YW5jZW9mIE1hcnBQcmV2aWV3Vmlldykge1xuXHRcdFx0XHRyZXR1cm4gdmlldztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBNYXJwUHJldmlld1ZpZXcodGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShNQVJQX1BSRVZJRVdfVklFVylbMF0pO1xuXHR9XG59XG5cbmNsYXNzIE1hcnBTbGlkZXNNb2RhbCBleHRlbmRzIE1vZGFsIHtcblx0Y29uc3RydWN0b3IoYXBwOiBBcHApIHtcblx0XHRzdXBlcihhcHApO1xuXHR9XG5cblx0b25PcGVuKCkge1xuXHRcdGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcblx0XHRjb250ZW50RWwuc2V0VGV4dCgnV29haCEnKTtcblx0fVxuXG5cdG9uQ2xvc2UoKSB7XG5cdFx0Y29uc3Qge2NvbnRlbnRFbH0gPSB0aGlzO1xuXHRcdGNvbnRlbnRFbC5lbXB0eSgpO1xuXHR9XG59XG5cbmNsYXNzIE1hcnBTbGlkZXNTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG5cdHBsdWdpbjogTWFycFNsaWRlcztcblxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBNYXJwU2xpZGVzKSB7XG5cdFx0c3VwZXIoYXBwLCBwbHVnaW4pO1xuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xuXHR9XG5cblx0ZGlzcGxheSgpOiB2b2lkIHtcblx0XHRjb25zdCB7Y29udGFpbmVyRWx9ID0gdGhpcztcblxuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cblx0XHRjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7dGV4dDogJ1NldHRpbmdzIGZvciBteSBhd2Vzb21lIHBsdWdpbi4nfSk7XG5cblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKCdTZXR0aW5nICMxJylcblx0XHRcdC5zZXREZXNjKCdJdFxcJ3MgYSBzZWNyZXQnKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignRW50ZXIgeW91ciBzZWNyZXQnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubXlTZXR0aW5nKVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1NlY3JldDogJyArIHZhbHVlKTtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5teVNldHRpbmcgPSB2YWx1ZTtcblx0XHRcdFx0XHRhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0fSkpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHsgSXRlbVZpZXcsIE1hcmtkb3duVmlldywgTWVudSwgV29ya3NwYWNlTGVhZiB9IGZyb20gJ29ic2lkaWFuJztcblxuZXhwb3J0IGNvbnN0IE1BUlBfUFJFVklFV19WSUVXID0gJ21hcnAtcHJldmlldy12aWV3JztcblxuZXhwb3J0IGNsYXNzIE1hcnBQcmV2aWV3VmlldyBleHRlbmRzIEl0ZW1WaWV3ICB7XG4gICAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZikge1xuICAgICAgICBzdXBlcihsZWFmKTtcbiAgICB9XG5cbiAgICBnZXRWaWV3VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIE1BUlBfUFJFVklFV19WSUVXO1xuICAgIH1cblxuICAgIGdldERpc3BsYXlUZXh0KCkge1xuICAgICAgICByZXR1cm4gXCJFeGFtcGxlIHZpZXdcIjtcbiAgICB9XG5cbiAgICBhc3luYyBvbk9wZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFycCBQcmV2aWV3IG9uT3BlbiBWaWV3XCIpO1xuXG4gICAgICAgIC8vIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWwuY2hpbGRyZW5bMV07XG4gICAgICAgIC8vIGNvbnRhaW5lci5lbXB0eSgpO1xuICAgICAgICAvLyBjb250YWluZXIuY3JlYXRlRWwoXCJoNFwiLCB7IHRleHQ6IFwiRXhhbXBsZSB2aWV3XCIgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25DbG9zZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXJwIFByZXZpZXcgb25DbG9zZSBWaWV3XCIpO1xuICAgICAgICAvLyBOb3RoaW5nIHRvIGNsZWFuIHVwLlxuICAgIH1cblxuICAgIGFzeW5jIG9uQ2hhbmdlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcnAgUHJldmlldyBvbkNoYW5nZSBWaWV3XCIpO1xuICAgICAgICAvLyBOb3RoaW5nIHRvIGNsZWFuIHVwLlxuICAgIH1cbiAgICBcbiAgICBkaXNwbGF5U2xpZGVzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcnAgUHJldmlldyBEaXNwbGF5IFNsaWRlc1wiKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdO1xuICAgICAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiPGRpdj5IZWxsbyBXb3JkITwvZGl2PlwiO1xuICAgICAgICAvL3RoaXMuY29udGVudEVsLmNyZWF0ZURpdih7IHRleHQ6IFwiaGVsbG8gd29yZCFcIiB9KVxuXG5cdFx0Ly8gY29uc3Qgdmlld0NvbnRlbnQgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdO1xuXG5cdFx0Ly8gdmlld0NvbnRlbnQuZW1wdHkoKTtcblx0XHQvLyB2aWV3Q29udGVudC5hZGRDbGFzcygncmV2ZWFsLXByZXZpZXctdmlldycpO1xuXHRcdC8vIHZpZXdDb250ZW50LmNyZWF0ZUVsKCdpZnJhbWUnLCB7XG5cdFx0Ly8gXHRhdHRyOiB7XG5cdFx0Ly8gXHRcdC8vIEB0cy1pZ25vcmU6XG5cdFx0Ly8gXHRcdHNyYzogdGhpcy51cmwsXG5cdFx0Ly8gXHRcdHNhbmRib3g6ICdhbGxvdy1zY3JpcHRzIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXBvcHVwcycsXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIH0pO1xuXHR9XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUFBLG1CQUE0Rjs7O0FDQTVGLHNCQUE0RDtBQUVyRCxJQUFNLG9CQUFvQjtBQUUxQixJQUFNLGtCQUFOLGNBQThCLHlCQUFVO0FBQUEsRUFDM0MsWUFBWSxNQUFxQjtBQUM3QixVQUFNLElBQUk7QUFBQSxFQUNkO0FBQUEsRUFFQSxjQUFjO0FBQ1YsV0FBTztBQUFBLEVBQ1g7QUFBQSxFQUVBLGlCQUFpQjtBQUNiLFdBQU87QUFBQSxFQUNYO0FBQUEsRUFFQSxNQUFNLFNBQVM7QUFDWCxZQUFRLElBQUksMEJBQTBCO0FBQUEsRUFLMUM7QUFBQSxFQUVBLE1BQU0sVUFBVTtBQUNaLFlBQVEsSUFBSSwyQkFBMkI7QUFBQSxFQUUzQztBQUFBLEVBRUEsTUFBTSxXQUFXO0FBQ2IsWUFBUSxJQUFJLDRCQUE0QjtBQUFBLEVBRTVDO0FBQUEsRUFFQSxnQkFBZ0I7QUFDWixZQUFRLElBQUksNkJBQTZCO0FBRXpDLFVBQU0sWUFBWSxLQUFLLFlBQVksU0FBUyxDQUFDO0FBQzdDLGNBQVUsTUFBTTtBQUNoQixjQUFVLFlBQVk7QUFBQSxFQWM3QjtBQUNEOzs7QUQ3Q0EsSUFBTSxtQkFBdUM7QUFBQSxFQUM1QyxXQUFXO0FBQ1o7QUFFQSxJQUFxQixhQUFyQixjQUF3Qyx3QkFBTztBQUFBLEVBRzlDLE1BQU0sU0FBUztBQUNkLFVBQU0sS0FBSyxhQUFhO0FBRXhCLFNBQUs7QUFBQSxNQUNKO0FBQUEsTUFDQSxDQUFDLFNBQVMsSUFBSSxnQkFBZ0IsSUFBSTtBQUFBLElBQ25DO0FBRUEsVUFBTSxlQUFlLEtBQUssY0FBYyxVQUFVLHNCQUFzQixZQUFZO0FBQ25GLFlBQU0sS0FBSyxTQUFTO0FBQUEsSUFDckIsQ0FBQztBQWVELFNBQUssV0FBVztBQUFBLE1BQ2YsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sVUFBVSxNQUFNO0FBQ2YsWUFBSSxnQkFBZ0IsS0FBSyxHQUFHLEVBQUUsS0FBSztBQUFBLE1BQ3BDO0FBQUEsSUFDRCxDQUFDO0FBRUQsU0FBSyxXQUFXO0FBQUEsTUFDZixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxRQUFnQixTQUF1QjtBQUN2RCxnQkFBUSxJQUFJLE9BQU8sYUFBYSxDQUFDO0FBQ2pDLGVBQU8saUJBQWlCLHVCQUF1QjtBQUFBLE1BQ2hEO0FBQUEsSUFDRCxDQUFDO0FBRUQsU0FBSyxXQUFXO0FBQUEsTUFDZixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixlQUFlLENBQUMsYUFBc0I7QUFFckMsY0FBTSxlQUFlLEtBQUssSUFBSSxVQUFVLG9CQUFvQiw2QkFBWTtBQUN4RSxZQUFJLGNBQWM7QUFHakIsY0FBSSxDQUFDLFVBQVU7QUFDZCxnQkFBSSxnQkFBZ0IsS0FBSyxHQUFHLEVBQUUsS0FBSztBQUFBLFVBQ3BDO0FBR0EsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUFBLElBQ0QsQ0FBQztBQUdELFNBQUssY0FBYyxJQUFJLHFCQUFxQixLQUFLLEtBQUssSUFBSSxDQUFDO0FBQUEsRUFVNUQ7QUFBQSxFQUVBLFdBQVc7QUFDVixTQUFLLElBQUksVUFBVSxtQkFBbUIsaUJBQWlCO0FBQUEsRUFDeEQ7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNwQixTQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUFBLEVBQzFFO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDcEIsVUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQUEsRUFDbEM7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNwQixTQUFLLElBQUksVUFBVSxtQkFBbUIsaUJBQWlCO0FBRXZELFVBQU0sS0FBSyxJQUFJLFVBQVUsYUFBYSxLQUFLLEVBQUUsYUFBYTtBQUFBLE1BQ3hELE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNWLENBQUM7QUFFRCxTQUFLLElBQUksVUFBVTtBQUFBLE1BQ2pCLEtBQUssSUFBSSxVQUFVLGdCQUFnQixpQkFBaUIsRUFBRSxDQUFDO0FBQUEsSUFDekQ7QUFBQSxFQUNDO0FBQUEsRUFFRixNQUFNLFdBQVc7QUFDaEIsVUFBTSxpQkFBaUIsS0FBSyxJQUFJLFVBQVUsY0FBYztBQUV4RCxRQUFJLENBQUMsZ0JBQWdCO0FBQ3BCO0FBQUEsSUFDRDtBQUVBLFlBQVEsSUFBSSxjQUFjO0FBTzFCLFVBQU0sS0FBSyxhQUFhO0FBUXhCLFVBQU0sV0FBVyxLQUFLLGdCQUFnQjtBQUN0QyxhQUFTLGNBQWM7QUFBQSxFQUN4QjtBQUFBLEVBRUEsa0JBQW9DO0FBQ25DLGVBQVcsUUFBUSxLQUFLLElBQUksVUFBVSxnQkFBZ0IsaUJBQWlCLEdBQUc7QUFDekUsWUFBTSxPQUFPLEtBQUs7QUFDbEIsY0FBUSxJQUFJLElBQUk7QUFDaEIsVUFBSSxnQkFBZ0IsaUJBQWlCO0FBQ3BDLGVBQU87QUFBQSxNQUNSO0FBQUEsSUFDRDtBQUNBLFdBQU8sSUFBSSxnQkFBZ0IsS0FBSyxJQUFJLFVBQVUsZ0JBQWdCLGlCQUFpQixFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ3BGO0FBQ0Q7QUFFQSxJQUFNLGtCQUFOLGNBQThCLHVCQUFNO0FBQUEsRUFDbkMsWUFBWSxLQUFVO0FBQ3JCLFVBQU0sR0FBRztBQUFBLEVBQ1Y7QUFBQSxFQUVBLFNBQVM7QUFDUixVQUFNLEVBQUMsVUFBUyxJQUFJO0FBQ3BCLGNBQVUsUUFBUSxPQUFPO0FBQUEsRUFDMUI7QUFBQSxFQUVBLFVBQVU7QUFDVCxVQUFNLEVBQUMsVUFBUyxJQUFJO0FBQ3BCLGNBQVUsTUFBTTtBQUFBLEVBQ2pCO0FBQ0Q7QUFFQSxJQUFNLHVCQUFOLGNBQW1DLGtDQUFpQjtBQUFBLEVBR25ELFlBQVksS0FBVSxRQUFvQjtBQUN6QyxVQUFNLEtBQUssTUFBTTtBQUNqQixTQUFLLFNBQVM7QUFBQSxFQUNmO0FBQUEsRUFFQSxVQUFnQjtBQUNmLFVBQU0sRUFBQyxZQUFXLElBQUk7QUFFdEIsZ0JBQVksTUFBTTtBQUVsQixnQkFBWSxTQUFTLE1BQU0sRUFBQyxNQUFNLGtDQUFpQyxDQUFDO0FBRXBFLFFBQUkseUJBQVEsV0FBVyxFQUNyQixRQUFRLFlBQVksRUFDcEIsUUFBUSxlQUFnQixFQUN4QixRQUFRLFVBQVEsS0FDZixlQUFlLG1CQUFtQixFQUNsQyxTQUFTLEtBQUssT0FBTyxTQUFTLFNBQVMsRUFDdkMsU0FBUyxPQUFPLFVBQVU7QUFDMUIsY0FBUSxJQUFJLGFBQWEsS0FBSztBQUM5QixXQUFLLE9BQU8sU0FBUyxZQUFZO0FBQ2pDLFlBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxJQUNoQyxDQUFDLENBQUM7QUFBQSxFQUNMO0FBQ0Q7IiwKICAibmFtZXMiOiBbImltcG9ydF9vYnNpZGlhbiJdCn0K
