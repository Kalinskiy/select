import {Select} from './select/select'
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'Please choose element',
    selectedId: '2',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'React Native'},
        {id: '5', value: 'Next'},
        {id: '6', value: 'Nest'}
    ],
    onSelect(item) {
        console.log('selected Item', item)
    }
})


// select.select('4')
window.s = select

function foo() {
    console.log('foo')
    function foo1() {
        console.log('foo1')
        function foo2() {
            console.log('foo2')
        }
        return foo2
    }
    return foo1;

}
const scopeFoo1 = foo();

const scopeFoo2 = scopeFoo1()
console.log(scopeFoo2())