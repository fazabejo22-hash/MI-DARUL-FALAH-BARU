<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Portal Madrasah' }} - MI Darul Falah</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen flex flex-col">
    <nav class="bg-white border-b border-slate-200 shadow-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
            <a href="{{ route('home') }}" class="font-bold text-emerald-700 text-lg">MI Darul Falah Portal</a>
            <div class="flex items-center space-x-4">
                @auth
                <span class="text-sm text-slate-600">{{ auth()->user()->name }}</span>
                <form action="{{ route('logout') }}" method="POST" class="inline">
                    @csrf
                    <button type="submit" class="text-sm text-red-600 hover:underline">Keluar</button>
                </form>
                @else
                <a href="/admin/login" class="text-sm text-emerald-700 font-semibold hover:underline">Masuk</a>
                @endauth
            </div>
        </div>
    </nav>
    <main class="flex-grow">
        @yield('content')
    </main>
    <footer class="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        &copy; {{ date('Y') }} Madrasah Ibtidaiyah Darul Falah. All rights reserved.
    </footer>
</body>
</html>
