# assignment_test_driven_diary
Build a command line diary interface, driven and protected by a suite of comprehensive tests.

**by Aaron Saloff**

## To run from command line:

`$ diary <command> <arg1> <arg2>`

You can use the following arguments:

- `entries` - Returns all entries
- `entry <message> <optional dateString>` - Adds a new entry
- `tags` - Returns all tags that were entered in entries
- `entriesWithTag <tagName>` - Returns a list of all entries with the given tag
- `date <someDateString>` - Returns a list of all entries from a given date
- `today` - Returns a list of all entries from today
- `search <searchTerm>` - Returns a list of all entries that include the search term
