var should = require('should')
//  , fs     = require('fs')
//  , str_replace_data = '/tmp/str_replace.json'
;

// clean up from prior run
//if (fs.existsSync(str_replace_data)) {
//    fs.unlinkSync(str_replace_data);
//}



describe('str_replace', function() {
    describe('should', function() {
    	var str_replace;
    	it('load without errors', function() {
	        str_replace = require('../index.js');
        });

        str_replace = require('../index.js');
        var flag = false;
        beforeEach(function(done){
            this.timeout(15 * 1000); // allow test to run for 15 seconds
//            str_replace({
//            }, function(err, data) {
                flag = (!err);
                done(); // complete the async beforeEach
//            });
        });   

    	it('callback ok', function() {
			 flag.should.equal(true);
        });

    });
});