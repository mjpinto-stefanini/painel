<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('includes.head')
</head>

<body class="ltr horizontalmenu">
    <noscript>Você precisa habilitar Javascript para rodar esta aplicação.</noscript>

    <div id="root">
        <div class="horizontalMenucontainer">
            <div class="page">
                @include('includes.header')
            </div>
        </div>
    </div>

</body>
</html>