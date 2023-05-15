import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'lui-icon',
    styleUrl: 'lui-icon.scss',
    shadow: true,
})
export class LuiIcon {
    render() {
        return (
            <Host>
                This is icon file
            </Host>
        );
    }
}
