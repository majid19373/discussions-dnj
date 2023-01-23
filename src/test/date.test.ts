import '@testing-library/jest-dom';
import { displayedAt } from '../utils/functions/date';

describe('CreadAt time comment',()=>{
    test('new Date().getTime(): Just before',()=>{
        expect(displayedAt(new Date().getTime())).toBe('Just before')
    })
})