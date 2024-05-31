
import './App.css'
function App2() {
    return (
       
<div class="w-full h-full bg-zinc-800 p-10 text-white">
<a class="text-blue-500" href="/">back to home</a>
<h1 class="text-3xl mt-10 tracking-tighter mb-3">All Users</h1>
<div class="users flex gap-3 flex-wrap">
        <div class="user w-72 p-4 bg-zinc-900 rounded-lg">
            <div class="w-full h-72 rounded-lg bg-zinc-700 overflow-hidden">
            </div>
            <h3 class="text-xl tracking-tighter mt-3"> </h3>
            <h5 class="text-zinc-500">
            </h5>
            <div class="flex gap-3 mt-10">
                <a class="text-zinc-300" href="">Edit User</a>
                <a class="text-red-500" href="">Delete User</a>
            </div>
        </div>
       
</div>
</div>
     );
}
        export default App2

