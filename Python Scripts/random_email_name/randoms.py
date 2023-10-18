import random
import os


class EmailNameGenerator:
    def __init__(self):
        self.dir_path = os.path.dirname(os.path.realpath(__file__))
        self.first_file_name = 'names.txt'
        self.last_file_name = 'last_names.txt'

    def __find_first_name(self):
        with open(os.path.abspath(self.dir_path + '/' + self.first_file_name), 'r+') as file:
            lines = file.readlines()
            fname = random.choice(lines)
            fname = fname.lower()
            return fname.strip()

    def __find_last_name(self):
        with open(os.path.abspath(self.dir_path + '/' + self.last_file_name), 'r+') as file:
            lines = file.readlines()
            l_name = random.choice(lines)
            l_name = l_name.lower()
            return l_name.strip()

    def __repr__(self):
        first_name = self.__find_first_name()
        last_name = self.__find_last_name()
        last_part = random.randint(132, 233)
        mailstr = f"{first_name}{last_part}{last_name}"

        result = [first_name.capitalize(), last_name.capitalize(), mailstr]

        return result
