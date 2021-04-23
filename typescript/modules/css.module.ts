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
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
            position: fixed;
            bottom: 0;
            width: 100%;
            border-top: 2px solid #cececea3;
            padding: 0 0;
            padding-bottom:1rem;
            padding-top:0.3rem;
            margin: 0;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0;
            margin-inline-end: 0;
            padding-inline-start: 0;
            background:white;
            z-index:21474836536;
        }
        .st-av li{
            list-style: none;  
            text-align: center;
            display: block;
            margin: 0;
        }
        .st-av li:last-child{
            border-right: none;
        }
        .st-av li a{
            text-decoration: none;
            color: #333;
        }

        .btn-1{
            background: url(${assetsRoot}sticky-icon-home.jpg) no-repeat center;
        }
        .btn-2{
            background: url(${assetsRoot}sticky-icon-regalos.jpg) no-repeat center;
        }

        .btn-3{
            background: url(${assetsRoot}sticky-icon-offer.jpg) no-repeat center;
        }
        .btn-sale{
            background: url(${assetsRoot}sticky-icon-sale.jpg) no-repeat center;
        }
        .btn-4{
            background: url(${assetsRoot}sticky-icon-cuenta.jpg) no-repeat center;
        }
        .btn-5{
            background: url(${assetsRoot}sticky-icon-chat.jpg) no-repeat center;
        }

        [class*=btn-]{
            height: 50px;
            display: block;
            width:50%;
            height:3rem;
            background-size:contain;
            margin:auto;
        }
    </style>
    `
}