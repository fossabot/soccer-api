//Carga las variables de entorno
import LOAD_ENV_CONFIG from './load.env';
import Server from './server/server';
import SocketLauncher from './server/plugins/socket/launcher';
//Inicia el servidor
new Server();
//new SocketLauncher();