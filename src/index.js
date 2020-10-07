import app from './app';

app.set('port', process.env.PORT || 4000 );

function main(){
    app.listen(app.get('port'), () => {
        console.log(`Server on port ${app.get('port')}`);
    })
}

main();