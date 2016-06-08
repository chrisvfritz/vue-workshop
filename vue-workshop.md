- how many people have used vue before?
- how many people write javascript regularly?

- examples
- concepts
- modify examples
- create from scratch

### Hello world

Goal: confirm it's working!

``` html
<p>{{ greeting }} world!</p>

<script>
  new Vue({
    el: 'body',
    data: {
      greeting: 'Hello'
    }
  })
</script>
```

### Data binding

``` html
<input v-model="greeting">
<p>{{ greeting }} world!</p>

<script>
  new Vue({
    el: 'body',
    data: {
      greeting: 'Hello'
    }
  })
</script>
```

`v-model` is shorthand for...

``` html
<input v-bind:value="message" v-on:input="updateMessage">
<p>{{ message }}</p>

<script>
  new Vue({
    el: 'body',
    data: {
      message: 'Hello world!'
    },
    methods: {
      updateMessage: function (event) {
        this.message = event.target.value
      }
    }
  })
</script>
```

- `v-on` key modifiers http://vuejs.org/guide/events.html#Key-Modifiers
- `v-if` http://vuejs.org/guide/conditional.html#v-if

``` html
<p>What's your name?</p>
<input v-model="fullname" v-on:keyup.enter="generateUsername">
<button v-on:click="clearFullname">Clear</button>
<button v-on:click="generateUsername">Generate Username</button>
<div v-if="username">
  <p>You should use <strong>{{ username }}</strong></p>
</div>

<script>
  new Vue({
    el: 'body',
    data: {
      fullname: '',
      username: ''
    },
    methods: {
      clearFullname: function () {
        this.fullname = ''
      },
      generateUsername: function () {
        this.username = this.fullname
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9\-_]/g, '')
      }
    }
  })
</script>
```

Read first:

-

Goals:

-

Resources:

- Data Binding Syntax http://vuejs.org/guide/syntax.html
- `v-bind` http://vuejs.org/api/#v-bind
- `v-on` http://vuejs.org/api/#v-on
- `methods` http://vuejs.org/api/#methods

### Computed properties

http://vuejs.org/guide/computed.html

``` html
<input v-model="firstNumber" type="number" >
<select v-model="operator">
  <option value="+">+</option>
  <option value="-">-</option>
  <option value="*">*</option>
  <option value="/">/</option>
</select>
<input v-model="secondNumber" type="number" >
=
<p>Result: {{ result }}</p>

<script>
  new Vue({
    el: 'body',
    data: {
      firstNumber: 0,
      secondNumber: 0,
      operator: '+'
    },
    computed: {
      result: function () {
        return eval(this.firstNumber + this.operator + this.secondNumber)
      }
    }
  })
</script>
```

``` html
<h1>Tip Calculator</h1>

<p>What's the bill?</p>
<input v-model="bill" type="number" min="0">

<p>How rude were you on a scale from "Not at all" to "My screaming baby triplets spilled a drink all over my waiter, which I then blamed the waiter for and demanded to see the manager."</p>
<input v-model="rudeness" type="range" min="0" max="5">

<p>You should tip ${{ calculatedTip }}</p>

<script>
  new Vue({
    el: 'body',
    data: {
      bill: 0,
      rudeness: 0
    },
    computed: {
      calculatedTip: function () {
        var tipPercent = 0.2
        tipPercent += this.rudeness * 0.04
        return (this.bill * tipPercent).toFixed(2)
      }
    }
  })
</script>
```

Goals
- Create an input where the background color is always set to whatever the value of the input is

Resources
- http://vuejs.org/guide/class-and-style.html#Binding-Inline-Styles
- https://github.com/ariutta/rgb-color

``` html
<input v-model="backgroundColor" v-bind:style="inputStyles">

<script>
  new Vue({
    el: 'body',

    data: {
      backgroundColor: 'lightblue'
    },

    computed: {
      inputStyles: function () {
        var rgbColor = new RGBColor(this.backgroundColor)
        return {
          backgroundColor: this.backgroundColor,
          color: 'rgb(' + (255 - rgbColor.r) + ', ' + (255 - rgbColor.g) + ', ' + (255 - rgbColor.b) + ')'
        }
      }
    }
  })
</script>
```

### Loops

``` html
<input type="number" v-model="firstNumber">
<select v-model="chosenOperator">
  <option
    v-for="operator in availableOperators"
    :value="operator"
  >
    {{ operator }}
  </option>
</select>
<input type="number" v-model="secondNumber">
=
{{ result }}

<script>
  new Vue({
    el: 'body',

    data: {
      firstNumber: 0,
      secondNumber: 0,
      chosenOperator: '+',
      availableOperators: ['+', '-', '*', '/']
    },

    computed: {
      result: function () {
        return eval(this.firstNumber + this.chosenOperator + this.secondNumber)
      }
    }
  })
</script>
```

``` html
<p>
  It will have been 2 minutes since I loaded this page in
  <counter
    :initial-value="120"
    :increment-by="-1"
    :stop-at="0"
  ></counter>
  seconds.
</p>

<script>
  Vue.component('counter', {
    template: '<span>{{ number }}</span>',

    props: {
      initialValue: {
        type: Number,
        default: 0
      },
      incrementBy: {
        type: Number,
        default: 1
      },
      interval: {
        type: Number,
        default: 1000
      },
      stopAt: {
        type: Number
      }
    },

    data: function () {
      return {
        number: this.initialValue
      }
    },

    created: function () {
      this.counter = setInterval(function () {
        this.number += this.incrementBy
        if (this.stopAt === this.number) {
          clearInterval(this.counter)
        }
      }.bind(this), this.interval)
    },

    beforeDestroy: function () {
      clearInterval(this.counter)
    }
  })

  new Vue({ el: 'body' })
</script>
```

``` html
<button id="show-modal" @click="$refs.myModal.open">
  Show Modal
</button>

<modal v-ref:my-modal>
  <p>This is a test alert</p>
</modal>

<script>
  Vue.component('modal', {
    template: '\
      <div class="modal-mask" v-show="show" transition="modal">\
        <div class="modal-wrapper">\
          <div class="modal-container">\
            <slot></slot>\
            <div>\
              <button class="modal-default-button" @click="show = false">\
                OK\
              </button>\
            </div>\
          </div>\
        </div>\
      </div>\
    ',

    props: {
      show: {
        type: Boolean,
        required: true,
        twoWay: true
      }
    },

    data: function () {
      return {
        show: false
      }
    },

    methods: {
      open: function () {
        this.show = true
      },
      close: function () {
        this.show = false
      }
    }
  })

  new Vue({
    el: 'body',
    data: {
      showModal: false
    }
  })
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-enter, .modal-leave {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
```

- hello world
-
- component with props
- component with validated props
