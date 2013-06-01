
module.exports = function (tagName) {
	  try {
	  	return require.resolve( 'filtro-'+tagName );
	  } catch( e ) {
	  	return false
	  }
}