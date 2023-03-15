import { ItemView, WorkspaceLeaf, MarkdownView, normalizePath } from 'obsidian';
import { Marp } from '@marp-team/marp-core'

import { MarpSlidesSettings } from '../utilities/settings'
import { FilePath } from '../utilities/filePath'

export const MARP_PREVIEW_VIEW = 'marp-preview-view';

export class MarpPreviewView extends ItemView  {
    private marp = new Marp();
    private settings : MarpSlidesSettings;

    constructor(settings: MarpSlidesSettings, leaf: WorkspaceLeaf) {
        super(leaf);

        this.settings = settings;
    }

    getViewType() {
        return MARP_PREVIEW_VIEW;
    }

    getDisplayText() {
        return "Deck Preview";
    }

    async onOpen() {

        if (this.settings.ThemePath != '') {        
            const fileContents: string[] = await Promise.all(
                this.app.vault.getFiles()
                    .filter(x => x.parent.path == normalizePath(this.settings.ThemePath))
                    .map((file) => this.app.vault.cachedRead(file))
            );

            fileContents.forEach((content) => {
                this.marp.themeSet.add(content);
            });
        }
    }

    async onClose() {
        // Nothing to clean up.
    }

    async onChange(view : MarkdownView) {
        this.displaySlides(view);
    }
    
    async displaySlides(view : MarkdownView) {
        
        const basePath = (new FilePath(this.settings)).getCompleteFileBasePath(view.file);
        const markdownText = view.data;
        
        const container = this.containerEl.children[1];
        container.empty();
       
        let { html, css } = this.marp.render(markdownText);
        
        // Replace Backgorund Url for images
        html = html.replace(/background-image:url\(&quot;/g, `background-image:url(&quot;${basePath}`);

        const htmlFile = `
            <!DOCTYPE html>
            <html>
            <head>
            <base href="${basePath}"></base>
            <style>${css}</style>
            </head>
            <body>${html}</body>
            </html>
            `
        container.innerHTML = htmlFile;
	}
}