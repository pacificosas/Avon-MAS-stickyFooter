export function css(assetsRoot):string{
    return `
    <style>
        body{
            margin: 0;
            padding: 0;
            font-family: Arial,Gotham,"Helvetica Neue",Helvetica,sans-serif;
            font-size: 1em;
            }
        .st-av{
            display: flex;
            position: fixed;
            bottom: 0;
            width: 100%;
            border-top: 1px solid #888;
            padding: 8px 0;
            margin: 0;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0;
            margin-inline-end: 0;
            padding-inline-start: 0;
        }
        .st-av li{
            list-style: none;  
            text-align: center;
            display: block;
            width: 20%;
            margin: 0;
            border-right: 1px solid #888;
        }
        .st-av li:last-child{
            border-right: none;
        }
        .st-av li a{
            text-decoration: none;
            color: #333;
        }
        .btn-1, .btn-2, .btn-3, .btn-4, .btn-5{
            height: 50px;
            display: block;
        }
        .btn-1{
            background: url(${assetsRoot}sticky-icon-home.jpg) no-repeat center;
        }
        .btn-2{
            background: url(${assetsRoot}sticky-icon-cart.jpg) no-repeat center;
        }
        .btn-3{
            background: url(${assetsRoot}sticky-icon-oferta.jpg) no-repeat center;
        }
        .btn-4{
            background: url(${assetsRoot}sticky-icon-cuenta.jpg) no-repeat center;
        }
        .btn-5{
            background: url(${assetsRoot}sticky-icon-chat.jpg) no-repeat center;
        }
    </style>
    `
}