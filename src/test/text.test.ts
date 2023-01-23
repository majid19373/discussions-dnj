import '@testing-library/jest-dom';
import { avatarName, validateTextComment } from '../utils/functions/text';

describe('Validate comment text',()=>{
    test('Validate',()=>{
        const str: string = `lorem Ipsum <script>alert(1)</script> @lorem <script>(function(){}())</script> Lorem @Lorem_ipsum`;
        const toString: string = 'lorem Ipsum &lt;script&gt;alert(1)&lt;/script&gt; <a href="#" class="inline-block text-blue-600 bg-blue-100 hover:text-blue-800 hover:bg-blue-200 py-[1px] px-1 rounded">@lorem</a> &lt;script&gt;(function(){}())&lt;/script&gt; Lorem <a href="#" class="inline-block text-blue-600 bg-blue-100 hover:text-blue-800 hover:bg-blue-200 py-[1px] px-1 rounded">@Lorem_ipsum</a>'
        expect(validateTextComment(str)).toContain(toString)
    });
});

describe('Avatar Name',()=>{
    test('Current User: CU',()=>{
        expect(avatarName('Current User')).toContain('CU')
    });
});