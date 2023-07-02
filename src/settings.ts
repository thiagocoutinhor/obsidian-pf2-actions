import { App, Setting, PluginSettingTab} from 'obsidian'
import Pf2Actions, { ACTION_STRINGS } from './main'

export interface Pf2ActionsSettings {
	oneActionString: string;
	twoActionString: string;
	threeActionString: string;
	freeActionString: string;
	reactionActionString: string;
}

export const DEFAULT_SETTINGS: Pf2ActionsSettings = {
	oneActionString: '1',
	twoActionString: '2',
	threeActionString: '3',
	freeActionString: '0',
	reactionActionString: 'r'
}

export default class Pf2ActionsSettingsTab extends PluginSettingTab {
	plugin: Pf2Actions;

	constructor(app: App, plugin: Pf2Actions) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl: root} = this;
		root.empty();
		root.createEl('h2', {text: 'Pathfinder 2E Actions Settings'});

		this.actionSettings(root.createDiv())
	}

	actionSettings(container: HTMLDivElement) {
		container.empty()
		new Setting(container)
			.setHeading()
			.setName('Actions')

		new Setting(container)
			.setName(
				createFragment(e => {
					e.createSpan({ text: ACTION_STRINGS.one, cls: 'pf2-actions'})
					e.createSpan({ text: ' One action string'})
				})
			)
			.addText(text => text
				.setPlaceholder(DEFAULT_SETTINGS.oneActionString)
				.setValue(this.plugin.settings.oneActionString)
				.onChange(async (value) => {
					this.plugin.settings.oneActionString = value || DEFAULT_SETTINGS.oneActionString;
					await this.plugin.saveSettings();
				})
			);

		new Setting(container)
			.setName(
				createFragment(e => {
					e.createSpan({ text: ACTION_STRINGS.two, cls: 'pf2-actions'})
					e.createSpan({ text: ' Two actions string'})
				})
			)
			.addText(text => text
				.setPlaceholder(DEFAULT_SETTINGS.twoActionString)
				.setValue(this.plugin.settings.twoActionString)
				.onChange(async (value) => {
					this.plugin.settings.twoActionString = value || DEFAULT_SETTINGS.twoActionString;
					await this.plugin.saveSettings();
				})
			);

		new Setting(container)
			.setName(
				createFragment(e => {
					e.createSpan({ text: ACTION_STRINGS.three, cls: 'pf2-actions'})
					e.createSpan({ text: ' Three actions string'})
				})
			)
			.addText(text => text
				.setPlaceholder(DEFAULT_SETTINGS.threeActionString)
				.setValue(this.plugin.settings.threeActionString)
				.onChange(async (value) => {
					this.plugin.settings.threeActionString = value || DEFAULT_SETTINGS.threeActionString;
					await this.plugin.saveSettings();
				})
			);

		new Setting(container)
			.setName(
				createFragment(e => {
					e.createSpan({ text: ACTION_STRINGS.free, cls: 'pf2-actions'})
					e.createSpan({ text: ' Free action string'})
				})
			)
			.addText(text => text
				.setPlaceholder(DEFAULT_SETTINGS.freeActionString)
				.setValue(this.plugin.settings.freeActionString)
				.onChange(async (value) => {
					this.plugin.settings.freeActionString = value || DEFAULT_SETTINGS.freeActionString;
					await this.plugin.saveSettings();
				})
			);

		new Setting(container)
			.setName(
				createFragment(e => {
					e.createSpan({ text: ACTION_STRINGS.reaction, cls: 'pf2-actions'})
					e.createSpan({ text: ' Reaction string'})
				})
			)
			.addText(text => text
				.setPlaceholder(DEFAULT_SETTINGS.reactionActionString)
				.setValue(this.plugin.settings.reactionActionString)
				.onChange(async (value) => {
					this.plugin.settings.reactionActionString = value || DEFAULT_SETTINGS.reactionActionString;
					await this.plugin.saveSettings();
				})
			);
	}
}
