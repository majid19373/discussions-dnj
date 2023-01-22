import '@testing-library/jest-dom';
import { validateTextComment } from '../utils/functions/text';

describe('Validate comment text',()=>{
    test('Validate',()=>{
        const str: string = `lorem Ipsum <script>alert(1)</script> @lorem <script>(function(){}())</script> Lorem @Lorem_ipsum`;
        const toString: string = 'lorem Ipsum &lt;script&gt;alert(1)&lt;/script&gt; <a>@lorem</a> &lt;script&gt;(function(){}())&lt;/script&gt; Lorem <a>@Lorem_ipsum</a>'
        expect(validateTextComment(str)).toContain(toString)
    });
});