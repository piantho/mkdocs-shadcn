"""MkDocs theme package for the shadcn Tailwind-based theme."""
from importlib import resources

__all__ = ["get_theme_dir"]


def get_theme_dir():
    """Return the filesystem path to the packaged theme."""
    return str(resources.files(__package__))
