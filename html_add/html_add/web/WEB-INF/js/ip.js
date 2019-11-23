new Vue({
	  el: '#app',
	  data () {
		return {
		  info: null
		}
	  },
	  mounted () {
		axios
		  .get('http://api.ipstack.com/check?access_key=f623f6280f72f8e3a98ec2b36bab04c2')
		  .then((res) => {
			  this.info =res;
			  console.log(this.info)
		   });
		  
	  }
	})