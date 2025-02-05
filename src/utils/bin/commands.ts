// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 █████   ███   █████ ██████████ █████         █████████     ███████    ██████   ██████ ██████████ ███
░░███   ░███  ░░███ ░░███░░░░░█░░███         ███░░░░░███  ███░░░░░███ ░░██████ ██████ ░░███░░░░░█░███
 ░███   ░███   ░███  ░███  █ ░  ░███        ███     ░░░  ███     ░░███ ░███░█████░███  ░███  █ ░ ░███
 ░███   ░███   ░███  ░██████    ░███       ░███         ░███      ░███ ░███░░███ ░███  ░██████   ░███
 ░░███  █████  ███   ░███░░█    ░███       ░███         ░███      ░███ ░███ ░░░  ░███  ░███░░█   ░███
  ░░░█████░█████░    ░███ ░   █ ░███      █░░███     ███░░███     ███  ░███      ░███  ░███ ░   █░░░ 
    ░░███ ░░███      ██████████ ███████████ ░░█████████  ░░░███████░   █████     █████ ██████████ ███
     ░░░   ░░░      ░░░░░░░░░░ ░░░░░░░░░░░   ░░░░░░░░░     ░░░░░░░    ░░░░░     ░░░░░ ░░░░░░░░░░ ░░░ 

     
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Credit to Cviennt on Github!
`;
};
