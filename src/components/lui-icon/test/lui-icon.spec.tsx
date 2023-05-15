import { newSpecPage } from '@stencil/core/testing';
import { LuiIcon } from '../lui-icon';

describe('lui-icon', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [LuiIcon],
            html: `<lui-icon></lui-icon>`,
        });
        expect(page.root).toEqualHtml(`
            <lui-icon>
                <mock:shadow-root>
                <slot></slot>
                </mock:shadow-root>
            </lui-icon>
        `);
    });
});
