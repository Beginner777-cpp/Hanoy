def convert(seconds):
    days = seconds // 86400
    hours = (seconds % 86400) // 3600
    minutes = ((seconds % 86400) % 3600) // 60
    seconds = (((seconds % 86400) % 3600)) % 60
    
    return f'{days} {hours} {minutes} {seconds}'
    
print(convert(1234565))