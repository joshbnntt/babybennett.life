<template>
  <div class="outer">
      <div v-if="!done">
        <div class="countdown" @click="$emit('toggleWeeks')">
          <slot name="title">
            <span>Your event is in:</span>
          </slot>
          <p v-if="inWeeks">
            <span class="digit">{{ weeks + 1 | two_digits }} </span> <span class="text">Weeks</span> 
          </p>
          <p v-else>
            <span class="digit">{{ days + 1 | two_digits }} </span> <span class="text">Days</span> 
          </p>
        </div>
      </div>
      <div v-else>
        <slot name="finished">
        </slot>
      </div>
    </div>
    
  </div>
</template>
<script>
  export default {
    mounted () {
      setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000)
      }, 1000)
    },

    props: [
      'date',
      'showminutes',
      'showseconds',
      'inWeeks'
    ],

    data () {
      return {
        now: Math.trunc((new Date()).getTime() / 1000)
      }
    },

    computed: {
      seconds () {
        return (this._date - this.now) % 60
      },

      minutes () {
        return Math.trunc((this._date - this.now) / 60) % 60
      },

      hours () {
        return Math.trunc((this._date - this.now) / 60 / 60) % 24
      },

      days () {
        return Math.trunc((this._date - this.now) / 60 / 60 / 24)
      },
      weeks () {
        return Math.trunc((this._date - this.now) / (24 * 3600 * 7))
      },
      _date () {
        const date = Date.parse(this.date)
        const offset = new Date().getTimezoneOffset() * 60
        return Math.trunc((date) / 1000 + offset)
      },
      done () {
        return this._date - this.now <= 0
      }
    }
  }
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
.countdown {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width:100vw;
}
.block {
    display: flex;
    flex-direction: column;
    margin: 5px;
}

.text {
    color: aqua;
    font-size: 1.5em;
    font-family: 'Roboto', sans-serif, Medium;
    font-weight: 400;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color:#455A64;
    font-size: 2em;
    font-weight: 100;
    font-family: 'Roboto', serif;
    text-align: center;
    margin-left:3px;
}
</style>
