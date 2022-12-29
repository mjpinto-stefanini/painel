<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        @viteReactRefresh
        @vite(['resources/sass/app.scss', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="ltr horizontalmenu">
        <noscript>Você precisa habilitar Javascript para rodar esta aplicação.</noscript>
        @inertia
    </body>
</html>