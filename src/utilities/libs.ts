import { App } from 'obsidian';
import { FilePath } from './filePath';
import { MarpSlidesSettings } from './settings';
import fs from "fs";
import request from 'request';
import JSZip from 'jszip';

export class Libs {

    private settings : MarpSlidesSettings;

    constructor(settings: MarpSlidesSettings) {
        this.settings = settings;
    }
 
    loadLibs(app: App){
        const libPathUtility = new FilePath(this.settings);
        const libPath = libPathUtility.getLibDirectory(app.vault);

        if (!fs.existsSync(libPath)) {
			//Download binary
			const downloadUrl = `https://github.com/samuele-cozzi/obsidian-marp-slides/releases/download/lib-v3/lib.zip`;

			const bufs: Uint8Array[] = [];
			
			let buf: Uint8Array;
			request
				.get(downloadUrl)
				.on('end', () => {
					console.log(bufs);
					buf = Buffer.concat(bufs);
					const zip : JSZip = new JSZip();
					zip
						.loadAsync(buf)
						.then(contents => {
							Object.keys(contents.files).forEach(function (filename) {
								if (!contents.files[filename].dir) {
									const file = zip.file(filename);
									if (file != null){
										file.async('nodebuffer')
										.then(function (content) {
											const dest = `${libPathUtility.getLibDirectory(app.vault)}${filename}`;
											fs.writeFileSync(dest, content);
										});
									}
								}
							});
						})
						.catch(error => {
							console.log(error);
						});
				})
				.on('error', error => {
					console.log(error);
				})
				.on('data', (d : Buffer) => {
					bufs.push(new Uint8Array(d.buffer));
				});
		}
    }
}